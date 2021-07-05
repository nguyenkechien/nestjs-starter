import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CategoriseService } from './categorise.service';
import { Categorise } from './entities/categorise.entity';
import { CreateCategoriseInput } from './dto/create-categorise.input';
import { UpdateCategoriseInput } from './dto/update-categorise.input';
import { FindOneOptions, FindManyOptions } from 'typeorm';
import { GqlAuthGuard } from '../auth/graphql/gql-auth.guard';
import { UseGuards } from '@nestjs/common';

@Resolver(() => Categorise)
export class CategoriseResolver {
  constructor(private readonly categoriseService: CategoriseService) {}

  @Mutation(() => Categorise)
  // @UseGuards(GqlAuthGuard)
  createCategorise(
    @Args('createCategoriseInput') createCategoriseInput: CreateCategoriseInput,
  ) {
    return this.categoriseService.create(createCategoriseInput);
  }

  @Query(() => [Categorise], { name: 'categorise' })
  async findAll(params: FindManyOptions<Categorise> = {}) {
    const cate = await this.categoriseService.findAll(params);
    console.log(cate);
    return cate;
  }

  // @Query(() => Categorise, { name: 'categorise' })
  // findOne(params: FindOneOptions<Categorise> = {}) {
  //   return this.categoriseService.findOne(params);
  // }

  @Mutation(() => Categorise)
  @UseGuards(GqlAuthGuard)
  updateCategorise(
    @Args('updateCategoriseInput') updateCategoriseInput: UpdateCategoriseInput,
  ) {
    return this.categoriseService.update(
      updateCategoriseInput.id,
      updateCategoriseInput,
    );
  }

  @Mutation(() => Categorise)
  @UseGuards(GqlAuthGuard)
  removeCategorise(@Args('id', { type: () => Int }) id: number) {
    return this.categoriseService.remove(id);
  }
}
