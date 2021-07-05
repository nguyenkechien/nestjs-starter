import { Field, InputType, Int } from '@nestjs/graphql';
import { Categorise } from '../entities/categorise.entity';
@InputType()
export class CreateCategoriseInput {
  @Field()
  name?: string;
  @Field(() => Int, { nullable: true })
  parentCategoryId?: number;
  parentCategory?: Categorise;
  publish?: boolean;
  publish_start?: Date;
  publish_end?: Date;
}
