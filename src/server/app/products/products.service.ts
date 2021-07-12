import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  CreateProductInput,
  CreateProductDto,
} from './dto/create-product.input';
import {
  UpdateProductInput,
  UpdateProductDto,
} from './dto/update-product.input';
import { Product } from './entities/product.entity';
import { Repository, FindManyOptions, FindOneOptions } from 'typeorm';
import { BrandsService } from '../brands/brands.service';
import { CategoriseService } from '../categorise/categorise.service';
import { kebabCase } from 'lodash';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
    @Inject(BrandsService) private brandsService: BrandsService,
    @Inject(CategoriseService) private categoryService: CategoriseService,
  ) {}

  create(product: CreateProductDto) {
    return this.productRepository.save(product);
  }

  findAll(params: FindManyOptions<Product> = {}) {
    const query = Object.assign(
      { relations: ['category', 'brand', 'attributes'] },
      params,
    );
    return this.productRepository.find(query);
  }

  findOne(params: FindOneOptions<Product> = {}) {
    const query = Object.assign(
      { relations: ['category', 'brand', 'attributes'] },
      params,
    );
    return this.productRepository.findOne(query);
  }

  update(id: number, updateInput: UpdateProductInput) {
    return this.productRepository.update(id, updateInput);
  }

  remove(id: number) {
    return this.productRepository.delete(id);
  }

  async findOrCreate({
    brandId,
    categoryId,
    ...createInput
  }: CreateProductInput) {
    const product: Product = await this.findOne({
      where: { name: createInput.name },
    });
    if (product) return product;

    const brand = await this.brandsService.findOne({
      where: { id: brandId },
    });
    const category = await this.categoryService.findOne({
      where: { id: categoryId },
    });

    const createItem: CreateProductDto = {
      ...createInput,
      brand,
      category,
    };
    createItem.slug = createInput.slug || kebabCase(createInput.name);
    return this.create(createItem);
  }

  async updateOrCreate(id: number, updateInput: UpdateProductInput) {
    try {
      const product = await this.findOne({ where: { id } });
      if (!product) return this.findOrCreate(updateInput);

      const brand = await this.brandsService.findOne({
        where: { id: updateInput.brandId },
      });
      const category = await this.categoryService.findOne({
        where: { id: updateInput.categoryId },
      });
      const { brandId, categoryId, ...updateProductDto } = updateInput;
      const updateProduct: UpdateProductDto = {
        ...updateProductDto,
        brand,
        category,
      };
      await this.update(id, updateProduct);
      return updateProduct;
    } catch (error) {
      console.log(error);
      return {};
    }
  }
}
