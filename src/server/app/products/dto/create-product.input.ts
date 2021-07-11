import { InputType, Field, PartialType } from '@nestjs/graphql';
import { Brand } from '../../brands/entities/brand.entity';
import { Categorise } from '../../categorise/entities/categorise.entity';
import { PartialType as MappedTypesPartialType } from '@nestjs/mapped-types';
import {
  CommonInput,
  CommonDto,
} from '../../../common/types/common-create-input';
@InputType()
export class CreateProductInput extends PartialType(CommonInput) {
  @Field()
  name?: string;
  @Field()
  price?: number;
  @Field()
  brandId?: number;
  @Field()
  categoryId?: number;
  @Field()
  description?: string;
}

export class CreateProductDto extends MappedTypesPartialType(CommonDto) {
  name?: string;
  price?: number;
  brand?: Brand;
  category?: Categorise;
  description?: string;
}
