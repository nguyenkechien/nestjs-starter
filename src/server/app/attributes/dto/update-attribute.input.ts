import {
  CreateAttributeDto,
  CreateAttributeInput,
} from './create-attribute.input';
import { PartialType as MappedTypesPartialType } from '@nestjs/mapped-types';
import { Field, InputType, PartialType, Int } from '@nestjs/graphql';

export class UpdateAttributeDto extends MappedTypesPartialType(
  CreateAttributeDto,
) {
  id: number;
}

@InputType()
export class UpdateAttributeInput extends PartialType(CreateAttributeInput) {
  @Field(() => Int)
  id: number;
}
