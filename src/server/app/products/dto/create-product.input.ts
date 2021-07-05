import { InputType, Field } from '@nestjs/graphql';
import { Brand } from '../../../../client/app/types/graphql-zeus';
import { Categorise } from '../../categorise/entities/categorise.entity';

@InputType()
export class CreateProductInput {
  @Field()
  name: string;
  @Field()
  price: number;
  @Field()
  brandId?: number;
  @Field()
  categoryId: number;
  @Field()
  publish: boolean;
  @Field()
  publishStart: Date;
  @Field()
  publishEnd: Date;
}

export class CreateProductDto {
  name?: string;
  price?: number;
  brand?: Brand;
  category?: Categorise;
  publish?: boolean;
  publish_start?: Date;
  publish_end?: Date;
}
