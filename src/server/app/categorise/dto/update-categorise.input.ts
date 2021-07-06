import {
  CreateCategoriseInput,
  CreateCategoriseDto,
} from './create-categorise.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { PartialType as MappedTypesPartialType } from '@nestjs/mapped-types';

@InputType()
export class UpdateCategoriseInput extends PartialType(CreateCategoriseInput) {
  @Field(() => Int)
  id: number;
}

export class UpdateCategoriseDto extends MappedTypesPartialType(
  CreateCategoriseDto,
) {
  id: number;
}
