import { CreateBrandInput, CreateBrandDto } from './create-brand.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { PartialType as MappedTypesPartialType } from '@nestjs/mapped-types';

@InputType()
export class UpdateBrandInput extends PartialType(CreateBrandInput) {
  @Field(() => Int)
  id: number;
}

export class UpdateBrandDto extends MappedTypesPartialType(CreateBrandDto) {
  id: number;
}
