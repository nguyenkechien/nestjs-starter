import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCategoriseInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
