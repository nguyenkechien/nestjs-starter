import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BrandsService } from './brands.service';
import { Brand } from './entities/brand.entity';
import { CreateBrandInput } from './dto/create-brand.input';
import { UpdateBrandInput } from './dto/update-brand.input';
import { FindOneOptions, FindManyOptions } from 'typeorm';

@Resolver(() => Brand)
export class BrandsResolver {
  constructor(private readonly brandsService: BrandsService) {}

  @Mutation(() => Brand)
  createBrand(@Args('createBrandInput') createBrandInput: CreateBrandInput) {
    return this.brandsService.create(createBrandInput);
  }

  @Query(() => [Brand], { name: 'brands' })
  findAll(params: FindManyOptions<Brand> = {}) {
    return this.brandsService.findAll(params);
  }

  @Query(() => Brand, { name: 'brand' })
  findOne(params: FindOneOptions<Brand> = {}) {
    return this.brandsService.findOne(params);
  }

  @Mutation(() => Brand)
  updateBrand(@Args('updateBrandInput') updateBrandInput: UpdateBrandInput) {
    return this.brandsService.update(updateBrandInput.id, updateBrandInput);
  }

  @Mutation(() => Brand)
  removeBrand(@Args('id', { type: () => Int }) id: number) {
    return this.brandsService.remove(id);
  }
}
