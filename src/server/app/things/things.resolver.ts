import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Inject, UseGuards } from '@nestjs/common';
import { FindManyOptions } from 'typeorm';
import { Thing } from './thing.entity';
import { ThingsService } from './things.service';
import { GqlAuthGuard } from '../auth/graphql/gql-auth.guard';

@Resolver((_of) => Thing)
export class ThingsResolver {
  constructor(@Inject(ThingsService) private thingsService: ThingsService) {}

  @Query((_returns) => [Thing])
  async things(params: FindManyOptions<Thing> = {}): Promise<Thing[]> {
    return this.thingsService.findAll(params);
  }

  @Mutation((_returns) => Thing)
  @UseGuards(GqlAuthGuard)
  createThing(@Args({ name: 'name', type: () => String }) name: string) {
    return this.thingsService.findOrCreateOne({
      where: { name },
    });
  }
}
