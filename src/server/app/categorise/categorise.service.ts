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
import { kebabCase } from 'lodash';

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
    parentCategoryId,
    ...createInput
  }: CreateCategoriseInput) {
    const where: { [x: string]: any } = {
      name: createInput.name,
    };
    if (parentCategoryId) where.parentCategory = { id: parentCategoryId };

    const category = await this.findOne({ where });
    if (category) return category;

    const createItem: CreateCategoriseDto = { ...createInput };
    createItem.slug = createInput.slug || kebabCase(createInput.name);
    if (parentCategoryId) {
      createItem.parentCategory = await this.findOne({
        where: { id: parentCategoryId },
      });
    }

    return this.create(createItem);
  }

  async updateOrCreate(id: number, updateInput: UpdateCategoriseInput) {
    try {
      const category = await this.findOne({ where: { id } });
      if (!category) return this.findOrCreate(updateInput);

      const { parentCategoryId, ...updateCategoriseDto } = updateInput;

      const updateItem: UpdateCategoriseDto = {
        ...updateCategoriseDto,
        id,
        parentCategory: category.parentCategory,
      };

      if (parentCategoryId && parentCategoryId !== category.parentCategory.id) {
        updateItem.parentCategory = await this.findOne({
          where: { id: parentCategoryId },
        });
      }
      await this.update(id, updateItem);
      return updateItem;
    } catch (error) {
      console.log(error);
    }
  }
}
