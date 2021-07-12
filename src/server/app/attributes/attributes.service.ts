import { Injectable, Inject } from '@nestjs/common';
import {
  CreateAttributeDto,
  CreateAttributeInput,
} from './dto/create-attribute.input';
import {
  UpdateAttributeDto,
  UpdateAttributeInput,
} from './dto/update-attribute.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Attribute } from './entities/attribute.entity';
import { Repository, FindManyOptions, FindOneOptions } from 'typeorm';
import { Product } from '../products/entities/product.entity';
import { ProductsService } from '../products/products.service';

@Injectable()
export class AttributesService {
  constructor(
    @InjectRepository(Attribute)
    private attributeRepository: Repository<Attribute>,
    @Inject(ProductsService) private productsService: ProductsService,
  ) {}
  create(attribute: CreateAttributeDto) {
    return this.attributeRepository.save(attribute);
  }

  findAll(params: FindManyOptions<Attribute> = {}) {
    return this.attributeRepository.find(params);
  }

  findOne(params: FindOneOptions<Attribute> = {}) {
    return this.attributeRepository.findOne(params);
  }

  update(id: number, updateInput: UpdateAttributeDto) {
    return this.attributeRepository.update(id, updateInput);
  }

  remove(id: number) {
    return this.attributeRepository.delete(id);
  }

  async findOrCreate({ productId, ...createInput }: CreateAttributeInput) {
    try {
      const attribute = await this.findOne({
        where: {
          name: createInput.name,
          value: createInput.value,
          product: { id: productId },
        },
      });
      if (attribute) return attribute;
      const product: Product = await this.productsService.findOne({
        where: { id: productId },
      });
      const createItem: CreateAttributeDto = {
        product,
        ...createInput,
      };
      return this.create(createItem);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async updateOrCreate(id: number, updateInput: UpdateAttributeInput) {
    try {
      const attribute = await this.findOne({ where: { id } });
      if (!attribute) return this.findOrCreate(updateInput);

      const product: Product = await this.productsService.findOne({
        where: { id: updateInput.productId },
      });
      const { productId, ...updateAttributeDto } = updateInput;
      const updateItem: UpdateAttributeDto = {
        ...updateAttributeDto,
        product,
      };
      return this.update(id, updateItem);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
