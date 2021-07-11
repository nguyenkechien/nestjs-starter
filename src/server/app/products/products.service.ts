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

  update(id: number, updateProductInput: UpdateProductInput) {
    return this.productRepository.update(id, updateProductInput);
  }

  remove(id: number) {
    return this.productRepository.delete(id);
  }

  async findOrCreate(createProductInput: CreateProductInput) {
    const brand = await this.brandsService.findOne({
      where: { id: createProductInput.brandId },
    });
    const category = await this.categoryService.findOne({
      where: { id: createProductInput.categoryId },
    });

    const queryProduct = {
      name: createProductInput.name,
      price: createProductInput.price,
      brand,
      category,
    };
    const product: Product = await this.findOne({
      where: { ...queryProduct },
    });
    if (product) return product;

    const newProduct: CreateProductDto = {
      ...queryProduct,
      description: createProductInput.description,
      isPublished: createProductInput.isPublished,
      publishStart: createProductInput.publishStart,
      publishEnd: createProductInput.publishEnd,
    };
    return this.create(newProduct);
  }

  async updateOrCreate(id: number, updateProductInput: UpdateProductInput) {
    try {
      const product = await this.findOne({ where: { id } });
      if (!product) return this.findOrCreate(updateProductInput);

      const brand = await this.brandsService.findOne({
        where: { id: updateProductInput.brandId },
      });
      const category = await this.categoryService.findOne({
        where: { id: updateProductInput.categoryId },
      });
      const { brandId, categoryId, ...updateProductDto } = updateProductInput;
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
