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

  update(id: number, updateAttributeInput: UpdateAttributeDto) {
    return this.attributeRepository.update(id, updateAttributeInput);
  }

  remove(id: number) {
    return this.attributeRepository.delete(id);
  }

  async findOrCreate({
    isPublished,
    name,
    publishEnd,
    publishStart,
    value,
    productId,
  }: CreateAttributeInput) {
    try {
      const attribute = await this.findOne({
        where: { name, value, product: { id: productId } },
      });
      if (attribute) return attribute;
      const product: Product = await this.productsService.findOne({
        where: { id: productId },
      });
      const createAttribute: CreateAttributeDto = {
        isPublished,
        name,
        publishEnd,
        publishStart,
        value,
        product,
      };
      return this.create(createAttribute);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async updateOrCreate(id: number, updateAttributeInput: UpdateAttributeInput) {
    try {
      const attribute = await this.findOne({ where: { id } });
      if (!attribute) return this.findOrCreate(updateAttributeInput);

      const product: Product = await this.productsService.findOne({
        where: { id: updateAttributeInput.productId },
      });
      const { productId, ...updateAttributeDto } = updateAttributeInput;
      const updateAttribute: UpdateAttributeDto = {
        ...updateAttributeDto,
        product,
      };
      return this.update(id, updateAttribute);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
