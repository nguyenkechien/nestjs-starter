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
  name?: string;
  @Field()
  value?: string;
  @Field()
  productId?: number;
}
export class CreateAttributeDto extends MappedTypesPartialType(CommonDto) {
  name?: string;
  value?: string;
  product: Product;
}
