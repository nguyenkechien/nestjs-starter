import { CreateCategoriseInput } from './create-categorise.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCategoriseInput extends PartialType(CreateCategoriseInput) {
  @Field(() => Int)
  id: number;
}
