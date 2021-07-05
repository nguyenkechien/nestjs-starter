import { Injectable } from '@nestjs/common';
import { CreateBrandInput } from './dto/create-brand.input';
import { UpdateBrandInput } from './dto/update-brand.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Brand } from './entities/brand.entity';
import { Repository, FindManyOptions, FindOneOptions } from 'typeorm';

@Injectable()
export class BrandsService {
  constructor(
    @InjectRepository(Brand)
    private brandRepository: Repository<Brand>,
  ) {}
  create(createBrandInput: CreateBrandInput) {
    return this.brandRepository.save(createBrandInput);
  }

  findAll(params: FindManyOptions<Brand> = {}) {
    return this.brandRepository.find(params);
  }

  findOne(params: FindOneOptions<Brand> = {}) {
    return this.brandRepository.findOne(params);
  }

  update(id: number, updateBrandInput: UpdateBrandInput) {
    return this.brandRepository.update(id, updateBrandInput);
  }

  remove(id: number) {
    return this.brandRepository.delete(id);
  }
}
