import { Field, InputType, Int, PartialType } from '@nestjs/graphql';
import { Categorise } from '../entities/categorise.entity';
import { PartialType as MappedTypesPartialType } from '@nestjs/mapped-types';
import { CommonInput } from 'src/server/common/types/common-create-input';
import { CommonDto } from '../../../common/types/common-create-input';
@InputType()
export class CreateCategoriseInput extends PartialType(CommonInput) {
  @Field()
  name?: string;

  @Field()
  description?: string;

  @Field(() => Int, {
    nullable: true,
    description: 'Id of the category parent',
  })
  parentCategoryId?: number;
}

export class CreateCategoriseDto extends MappedTypesPartialType(CommonDto) {
  name?: string;
  parentCategory?: Categorise;
  description?: string;
}
