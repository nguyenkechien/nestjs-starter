import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  FindManyOptions,
  Repository,
  FindOneOptions,
  FindConditions,
} from 'typeorm';

import { Thing } from './thing.entity';
import { CreateThingDto } from './dto/create-thing.dto';
import { UpdateThingDto } from './dto/update-thing.dto';

@Injectable()
export class ThingsService {
  constructor(
    @InjectRepository(Thing)
    private thingsRepository: Repository<Thing>,
  ) {}

  create(thing: CreateThingDto) {
    return this.thingsRepository.save(thing);
  }

  findOne(params: FindOneOptions<Thing> = {}) {
    return this.thingsRepository.findOne(params);
  }

  findAll(params: FindManyOptions<Thing> = {}) {
    return this.thingsRepository.find(params);
  }

  update(thing: UpdateThingDto) {
    return this.thingsRepository.update(thing.id, thing);
  }

  remove(params: FindConditions<Thing> = {}) {
    return this.thingsRepository.delete(params);
  }

  async findOrCreateOne(params: FindOneOptions<Thing> = {}) {
    let thing: Thing;
    thing = await this.findOne(params);
    if (thing) return thing;
    const conditions = params.where as CreateThingDto;
    thing = await this.create({ name: conditions.name });
    return thing;
  }

  async updateOrCreateOne(params: FindManyOptions<Thing> = {}) {
    let thing: Thing;
    thing = await this.findOne(params);
    if (!thing) {
      const conditions = params.where as CreateThingDto;
      thing = await this.create({
        name: conditions.name,
      });
    } else {
      const conditions = params.where as UpdateThingDto;
      const updateThing = await this.update({
        id: conditions.id,
        name: conditions.name,
      });
      thing = updateThing.raw;
    }
    return thing;
  }
}
