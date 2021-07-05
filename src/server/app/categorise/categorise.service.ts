import { Injectable } from '@nestjs/common';
import { CreateCategoriseInput } from './dto/create-categorise.input';
import { UpdateCategoriseInput } from './dto/update-categorise.input';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository, FindManyOptions } from 'typeorm';
import { Categorise } from './entities/categorise.entity';

@Injectable()
export class CategoriseService {
  constructor(
    @InjectRepository(Categorise)
    private categoriseRepository: Repository<Categorise>,
  ) {}

  async create(createCategoriseInput: CreateCategoriseInput) {
    const category = createCategoriseInput;
    if (createCategoriseInput.parentCategoryId) {
      const parentCategory = await this.findOne({
        where: { id: category.parentCategoryId },
      });
      category.parentCategory = parentCategory;
    }
    return this.categoriseRepository.save(category);
  }

  findAll(params: FindManyOptions<Categorise> = {}) {
    const query = Object.assign({ relations: ['parentCategory'] }, params);
    return this.categoriseRepository.find(query);
  }

  findOne(params: FindOneOptions<Categorise> = {}) {
    const query = Object.assign({ relations: ['subcategories'] }, params);
    return this.categoriseRepository.findOne(query);
  }

  update(id: number, updateCategoriseInput: UpdateCategoriseInput) {
    return this.categoriseRepository.update(id, updateCategoriseInput);
  }

  remove(id: number) {
    return this.categoriseRepository.delete(id);
  }
}
