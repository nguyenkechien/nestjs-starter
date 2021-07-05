import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { Product } from './entities/product.entity';
import { Repository, FindManyOptions, FindOneOptions } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  create(createProductInput: CreateProductInput) {
    return this.productRepository.save(createProductInput);
  }

  findAll(params: FindManyOptions<Product> = {}) {
    const query = Object.assign({ relations: ['category', 'brand'] }, params);
    return this.productRepository.find(query);
  }

  findOne(params: FindOneOptions<Product> = {}) {
    const query = Object.assign({ relations: ['category', 'brand'] }, params);
    return this.productRepository.findOne(query);
  }

  update(id: number, updateProductInput: UpdateProductInput) {
    return this.productRepository.update(id, updateProductInput);
  }

  remove(id: number) {
    return this.productRepository.delete(id);
  }

  async findOrCreate(params: FindOneOptions<Product> = {}) {
    const product: Product = await this.findOne(params);
    if (product) return product;
    const conditions = params.where as CreateProductInput;

    // product = await this.create({

    // });
  }
}
