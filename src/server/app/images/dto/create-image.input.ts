import { InputType, Field, PartialType } from '@nestjs/graphql';
import { PartialType as MappedTypesPartialType } from '@nestjs/mapped-types';
import {
  CommonInput,
  CommonDto,
} from 'src/server/common/types/common-create-input';

@InputType()
export class CreateImageInput extends PartialType(CommonInput) {
  @Field({ nullable: false })
  title!: string;

  @Field({ nullable: true })
  alt: string;

  @Field({ nullable: true })
  type: string;

  @Field({ nullable: true })
  size: string;

  @Field({ nullable: true })
  imageUrl: string;
}

export class CreateImageDto extends MappedTypesPartialType(CommonDto) {
  title!: string;
  alt!: string;
  type!: string;
  size!: string;
  imageUrl!: string;
}
