import { CreateImageInput, CreateImageDto } from './create-image.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { PartialType as MappedTypesPartialType } from '@nestjs/mapped-types';

@InputType()
export class UpdateImageInput extends PartialType(CreateImageInput) {
  @Field(() => Int)
  id: number;
}

export class UpdateImageDto extends MappedTypesPartialType(CreateImageDto) {
  id: number;
}
