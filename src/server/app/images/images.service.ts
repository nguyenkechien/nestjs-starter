import { Injectable } from '@nestjs/common';
import { CreateImageDto } from './dto/create-image.input';
import { UpdateImageDto } from './dto/update-image.input';
import { Image } from './entities/image.entity';
import { Repository, FindManyOptions, FindOneOptions } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ImagesService {
  constructor(
    @InjectRepository(Image)
    private imageRepository: Repository<Image>,
  ) {}
  create(image: CreateImageDto) {
    return this.imageRepository.save(image);
  }

  findAll(params: FindManyOptions<Image> = {}) {
    return this.imageRepository.find(params);
  }

  findOne(params: FindOneOptions<Image> = {}) {
    return this.imageRepository.findOne(params);
  }

  update(id: number, updateInput: UpdateImageDto) {
    return this.imageRepository.update(id, updateInput);
  }

  remove(id: number) {
    return this.imageRepository.delete(id);
  }
}
