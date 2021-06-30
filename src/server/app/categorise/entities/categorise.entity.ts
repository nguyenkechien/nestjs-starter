import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Categorise {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
