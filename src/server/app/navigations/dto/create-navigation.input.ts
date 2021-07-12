import { InputType, Int, Field, PartialType } from '@nestjs/graphql';
import {
  CommonInput,
  CommonDto,
} from '../../../common/types/common-create-input';
import { PartialType as MappedTypesPartialType } from '@nestjs/mapped-types';
import { Navigation } from '../entities/navigation.entity';

@InputType()
export class CreateNavigationInput extends PartialType(CommonInput) {
  @Field({ description: 'Example field (placeholder)' })
  name?: string;

  @Field(() => Int, { description: 'Parent Navigation Id field' })
  parentNavigationId?: number;
}

export class CreateNavigationDto extends MappedTypesPartialType(CommonDto) {
  name?: string;
  parentNavigation?: Navigation;
}
