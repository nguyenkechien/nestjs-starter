import { Injectable } from '@nestjs/common';
import { CreateCategoriseInput } from './dto/create-categorise.input';
import { UpdateCategoriseInput } from './dto/update-categorise.input';
import { InjectRepository } from '@nestjs/typeorm';
import {
  FindOneOptions,
  Repository,
  FindManyOptions,
  FindConditions,
} from 'typeorm';
import { Categorise } from './entities/categorise.entity';

@Injectable()
export class CategoriseService {
  constructor(
    @InjectRepository(Categorise)
    private categoriseRepository: Repository<Categorise>,
  ) {}

  create(createCategoriseInput: CreateCategoriseInput) {
    return this.categoriseRepository.save(createCategoriseInput);
  }

  findAll(params: FindManyOptions<Categorise> = {}) {
    return this.categoriseRepository.find(params);
  }

  findOne(params: FindOneOptions<Categorise> = {}) {
    return this.categoriseRepository.findOne(params);
  }

  update(id: number, updateCategoriseInput: UpdateCategoriseInput) {
    return this.categoriseRepository.update(id, updateCategoriseInput);
  }

  remove(params: FindConditions<Categorise> = {}) {
    return this.categoriseRepository.delete(params);
  }
}
