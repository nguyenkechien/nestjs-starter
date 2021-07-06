import { InputType, Field, PartialType } from '@nestjs/graphql';
import {
  CommonInput,
  CommonDto,
} from '../../../common/dto/common-create-input';
import { PartialType as MappedTypesPartialType } from '@nestjs/mapped-types';

@InputType()
export class CreateBrandInput extends PartialType(CommonInput) {
  @Field()
  name?: string;

  @Field()
  description?: string;
}

export class CreateBrandDto extends MappedTypesPartialType(CommonDto) {
  name?: string;
  description?: string;
}
