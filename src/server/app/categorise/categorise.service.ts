import { Injectable } from '@nestjs/common';
import {
  CreateCategoriseInput,
  CreateCategoriseDto,
} from './dto/create-categorise.input';
import {
  UpdateCategoriseInput,
  UpdateCategoriseDto,
} from './dto/update-categorise.input';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository, FindManyOptions } from 'typeorm';
import { Categorise } from './entities/categorise.entity';

@Injectable()
export class CategoriseService {
  constructor(
    @InjectRepository(Categorise)
    private categoriseRepository: Repository<Categorise>,
  ) {}

  create(category: CreateCategoriseDto) {
    return this.categoriseRepository.save(category);
  }

  findAll(params: FindManyOptions<Categorise> = {}) {
    const query = Object.assign({ relations: ['parentCategory'] }, params);
    return this.categoriseRepository.find(query);
  }

  findOne(params: FindOneOptions<Categorise> = {}) {
    const query = Object.assign({ relations: ['parentCategory'] }, params);
    return this.categoriseRepository.findOne(query);
  }

  update(id: number, updateCategorise: UpdateCategoriseDto) {
    return this.categoriseRepository.update(id, updateCategorise);
  }

  remove(id: number) {
    return this.categoriseRepository.delete(id);
  }

  async findOrCreate({
    name,
    isPublished,
    publishEnd,
    publishStart,
    parentCategoryId,
  }: CreateCategoriseInput) {
    const category = await this.findOne({
      where: { name: name, parentCategory: { id: parentCategoryId } },
    });
    if (category) return category;

    const newCategory: CreateCategoriseDto = {
      name,
      isPublished,
      publishEnd,
      publishStart,
    };
    if (parentCategoryId) {
      newCategory.parentCategory = await this.findOne({
        where: { id: parentCategoryId },
      });
    }

    return this.create(newCategory);
  }

  async updateOrCreate(
    id: number,
    updateCategoriseInput: UpdateCategoriseInput,
  ) {
    try {
      const category = await this.findOne({ where: { id } });
      if (!category) return this.findOrCreate(updateCategoriseInput);

      const updateCategory: UpdateCategoriseDto = {
        id,
        name: updateCategoriseInput.name,
        isPublished: updateCategoriseInput.isPublished,
        publishEnd: updateCategoriseInput.publishEnd,
        publishStart: updateCategoriseInput.publishStart,
        parentCategory: category.parentCategory,
      };

      if (updateCategoriseInput.parentCategoryId) {
        updateCategory.parentCategory = await this.findOne({
          where: { id: updateCategoriseInput.parentCategoryId },
        });
      }
      await this.update(id, updateCategory);
      return updateCategory;
    } catch (error) {
      console.log(error);
    }
  }
}
