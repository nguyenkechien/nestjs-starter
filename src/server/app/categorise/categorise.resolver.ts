import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CategoriseService } from './categorise.service';
import { Categorise } from './entities/categorise.entity';
import { CreateCategoriseInput } from './dto/create-categorise.input';
import { UpdateCategoriseInput } from './dto/update-categorise.input';

@Resolver(() => Categorise)
export class CategoriseResolver {
  constructor(private readonly categoriseService: CategoriseService) {}

  @Mutation(() => Categorise)
  createCategorise(
    @Args('createCategoriseInput') createCategoriseInput: CreateCategoriseInput,
  ) {
    return this.categoriseService.create(createCategoriseInput);
  }

  @Query(() => [Categorise], { name: 'categorise' })
  findAll() {
    return this.categoriseService.findAll();
  }

  @Query(() => Categorise, { name: 'categorise' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.categoriseService.findOne(id);
  }

  @Mutation(() => Categorise)
  updateCategorise(
    @Args('updateCategoriseInput') updateCategoriseInput: UpdateCategoriseInput,
  ) {
    return this.categoriseService.update(
      updateCategoriseInput.id,
      updateCategoriseInput,
    );
  }

  @Mutation(() => Categorise)
  removeCategorise(@Args('id', { type: () => Int }) id: number) {
    return this.categoriseService.remove(id);
  }
}
