import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { NavigationsService } from './navigations.service';
import { Navigation } from './entities/navigation.entity';
import { CreateNavigationInput } from './dto/create-navigation.input';
import { UpdateNavigationInput } from './dto/update-navigation.input';
import { FindManyOptions } from 'typeorm';

@Resolver(() => Navigation)
export class NavigationsResolver {
  constructor(private readonly navigationsService: NavigationsService) {}

  @Mutation(() => Navigation)
  createNavigation(
    @Args('createNavigationInput') createNavigationInput: CreateNavigationInput,
  ) {
    return this.navigationsService.findOrCreate(createNavigationInput);
  }

  @Query(() => [Navigation], { name: 'navigations' })
  findAll(params: FindManyOptions<Navigation> = {}) {
    return this.navigationsService.findAll(params);
  }

  @Query(() => Navigation, { name: 'navigation' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.navigationsService.findOne({ where: { id } });
  }

  @Mutation(() => Navigation)
  updateNavigation(
    @Args('updateNavigationInput') updateNavigationInput: UpdateNavigationInput,
  ) {
    return this.navigationsService.updateOrCreate(
      updateNavigationInput.id,
      updateNavigationInput,
    );
  }

  @Mutation(() => Navigation)
  removeNavigation(@Args('id', { type: () => Int }) id: number) {
    return this.navigationsService.remove(id);
  }

  @ResolveField()
  parentNavigation(@Parent() navigations: Navigation) {
    if (!navigations.parentNavigation) return null;
    return this.navigationsService.findOne({
      where: { id: navigations.parentNavigation.id },
    });
  }
}
