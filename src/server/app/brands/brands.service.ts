import { Injectable } from '@nestjs/common';
import { CreateBrandInput, CreateBrandDto } from './dto/create-brand.input';
import { UpdateBrandInput, UpdateBrandDto } from './dto/update-brand.input';
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

  async findOrCreate({
    name,
    isPublished,
    publishEnd,
    publishStart,
  }: CreateBrandInput) {
    const brand = await this.findOne({ where: { name } });
    if (brand) return brand;
    const newBrand: CreateBrandDto = {
      name,
      isPublished,
      publishEnd,
      publishStart,
    };
    return this.create(newBrand);
  }

  async updateOrCreate(id: number, updateBrandInput: UpdateBrandInput) {
    const brand = await this.findOne({ where: { id } });
    if (!brand) return this.findOrCreate(updateBrandInput);

    const updateBrand: UpdateBrandDto = {
      id,
      name: updateBrandInput.name,
      isPublished: updateBrandInput.isPublished,
      publishEnd: updateBrandInput.publishEnd,
      publishStart: updateBrandInput.publishStart,
    };

    await this.update(id, updateBrand);
    return updateBrand;
  }
}
