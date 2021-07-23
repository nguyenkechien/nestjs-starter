import {
  CommonDto,
  CommonInput,
} from '../../../common/types/common-create-input';
import { PartialType as MappedTypesPartialType } from '@nestjs/mapped-types';
import { Product } from '../../products/entities/product.entity';
import { Field, PartialType, InputType } from '@nestjs/graphql';

@InputType()
export class CreateAttributeInput extends PartialType(CommonInput) {
  @Field()
  title?: string;
  @Field()
  name?: string;
  @Field()
  value?: string;
  @Field()
  code?: string;
  @Field()
  description?: string;
  @Field()
  productId?: number;
}
export class CreateAttributeDto extends MappedTypesPartialType(CommonDto) {
  title?: string;
  name?: string;
  value?: string;
  code?: string;
  description?: string;
  product?: Product;
}
