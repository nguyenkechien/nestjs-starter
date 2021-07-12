import { Injectable } from '@nestjs/common';
import {
  CreateNavigationInput,
  CreateNavigationDto,
} from './dto/create-navigation.input';
import {
  UpdateNavigationInput,
  UpdateNavigationDto,
} from './dto/update-navigation.input';
import { Navigation } from './entities/navigation.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindManyOptions, FindOneOptions } from 'typeorm';
import { kebabCase } from 'lodash';

@Injectable()
export class NavigationsService {
  constructor(
    @InjectRepository(Navigation)
    private navigationRepository: Repository<Navigation>,
  ) {}
  create(navigation: CreateNavigationDto) {
    return this.navigationRepository.save(navigation);
  }

  findAll(params: FindManyOptions<Navigation> = {}) {
    const query = Object.assign({ relations: ['parentNavigation'] }, params);
    return this.navigationRepository.find(query);
  }

  findOne(params: FindOneOptions<Navigation> = {}) {
    const query = Object.assign({ relations: ['parentNavigation'] }, params);
    return this.navigationRepository.findOne(query);
  }

  update(id: number, updateInput: UpdateNavigationDto) {
    return this.navigationRepository.update(id, updateInput);
  }

  remove(id: number) {
    return this.navigationRepository.delete(id);
  }

  async findOrCreate({
    parentNavigationId,
    ...createInput
  }: CreateNavigationInput) {
    try {
      const navigation = await this.findOne({
        where: { name: name, parentNavigation: { id: parentNavigationId } },
      });
      if (navigation) return navigation;
      const createItem: CreateNavigationDto = { ...createInput };
      createItem.slug = createInput.slug || kebabCase(createInput.name);

      if (parentNavigationId) {
        createItem.parentNavigation = await this.findOne({
          where: { id: parentNavigationId },
        });
      }
      return this.create(createItem);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async updateOrCreate(id: number, updateInput: UpdateNavigationInput) {
    try {
      const navigation = await this.findOne({ where: { id } });
      if (!navigation) return this.findOrCreate(updateInput);

      const { parentNavigationId, ...updateNavigationDto } = updateInput;

      const updateItem: UpdateNavigationDto = {
        ...updateNavigationDto,
        id,
        parentNavigation: navigation.parentNavigation,
      };

      if (
        parentNavigationId &&
        parentNavigationId !== navigation.parentNavigation.id
      ) {
        updateItem.parentNavigation = await this.findOne({
          where: { id: parentNavigationId },
        });
      }

      await this.update(id, updateItem);
      return updateItem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
