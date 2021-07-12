import {
  CreateNavigationInput,
  CreateNavigationDto,
} from './create-navigation.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { PartialType as MappedTypesPartialType } from '@nestjs/mapped-types';

@InputType()
export class UpdateNavigationInput extends PartialType(CreateNavigationInput) {
  @Field(() => Int)
  id: number;
}

@InputType()
export class UpdateNavigationDto extends MappedTypesPartialType(
  CreateNavigationDto,
) {
  id: number;
}
