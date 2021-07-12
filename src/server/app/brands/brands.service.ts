import { Injectable } from '@nestjs/common';
import { CreateBrandInput, CreateBrandDto } from './dto/create-brand.input';
import { UpdateBrandInput, UpdateBrandDto } from './dto/update-brand.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Brand } from './entities/brand.entity';
import { Repository, FindManyOptions, FindOneOptions } from 'typeorm';
import { kebabCase } from 'lodash';

@Injectable()
export class BrandsService {
  constructor(
    @InjectRepository(Brand)
    private brandRepository: Repository<Brand>,
  ) {}
  create(brand: CreateBrandDto) {
    return this.brandRepository.save(brand);
  }

  findAll(params: FindManyOptions<Brand> = {}) {
    return this.brandRepository.find(params);
  }

  findOne(params: FindOneOptions<Brand> = {}) {
    return this.brandRepository.findOne(params);
  }

  update(id: number, updateInput: UpdateBrandDto) {
    return this.brandRepository.update(id, updateInput);
  }

  remove(id: number) {
    return this.brandRepository.delete(id);
  }

  async findOrCreate({ ...createInput }: CreateBrandInput) {
    const brand = await this.findOne({
      where: { name: createInput.name },
    });
    if (brand) return brand;
    const createItem: CreateBrandDto = { ...createInput };
    createItem.slug = createInput.slug || kebabCase(createInput.name);
    return this.create(createItem);
  }

  async updateOrCreate(id: number, updateInput: UpdateBrandInput) {
    const brand = await this.findOne({ where: { id } });
    if (!brand) return this.findOrCreate(updateInput);
    const updateItem: UpdateBrandDto = { ...updateInput, id };
    await this.update(id, updateItem);
    return updateItem;
  }
}
