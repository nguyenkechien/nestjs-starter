import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { CategoriseService } from './categorise.service';
import { Categorise } from './entities/categorise.entity';
import { CreateCategoriseInput } from './dto/create-categorise.input';
import { UpdateCategoriseInput } from './dto/update-categorise.input';
import { FindManyOptions } from 'typeorm';
import { GqlAuthGuard } from '../auth/graphql/gql-auth.guard';
import { UseGuards, Inject } from '@nestjs/common';

@Resolver(() => Categorise)
export class CategoriseResolver {
  constructor(
    @Inject(CategoriseService)
    private readonly categoriseService: CategoriseService,
  ) {}

  @Mutation(() => Categorise)
  @UseGuards(GqlAuthGuard)
  createCategorise(
    @Args('createCategoriseInput') createCategoriseInput: CreateCategoriseInput,
  ) {
    return this.categoriseService.findOrCreate(createCategoriseInput);
  }

  @Query(() => [Categorise], { name: 'categorise' })
  async findAll(params: FindManyOptions<Categorise> = {}) {
    const cate = await this.categoriseService.findAll(params);
    return cate;
  }

  @Query(() => Categorise, { name: 'category' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.categoriseService.findOne({ where: { id } });
  }

  @Mutation(() => Categorise)
  @UseGuards(GqlAuthGuard)
  updateCategorise(
    @Args('updateCategoriseInput') updateCategoriseInput: UpdateCategoriseInput,
  ) {
    return this.categoriseService.updateOrCreate(
      updateCategoriseInput.id,
      updateCategoriseInput,
    );
  }

  @Mutation(() => Categorise)
  @UseGuards(GqlAuthGuard)
  removeCategorise(@Args('id', { type: () => Int }) id: number) {
    return this.categoriseService.remove(id);
  }

  @ResolveField()
  parentCategory(@Parent() categorise: Categorise) {
    if (!categorise.parentCategory) return null;
    return this.categoriseService.findOne({
      where: { id: categorise.parentCategory.id },
    });
  }
}
