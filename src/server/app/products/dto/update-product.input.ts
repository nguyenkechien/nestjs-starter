import { CreateProductInput, CreateProductDto } from './create-product.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { PartialType as MappedTypesPartialType } from '@nestjs/mapped-types';

@InputType()
export class UpdateProductInput extends PartialType(CreateProductInput) {
  @Field(() => Int)
  id: number;
}

export class UpdateProductDto extends MappedTypesPartialType(CreateProductDto) {
  id: number;
}
