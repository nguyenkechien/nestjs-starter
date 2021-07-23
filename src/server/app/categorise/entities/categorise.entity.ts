import { Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { Product } from '../../products/entities/product.entity';
import {
  DateAudit,
  BaseEntity,
  CommonEntity,
} from 'src/server/common/types/base-entity';

@ObjectType()
@Entity()
export class Categorise extends DateAudit(BaseEntity(CommonEntity)) {
  @Field((_type) => Categorise, { nullable: true })
  @ManyToOne((_type) => Categorise, (cate) => cate.parentCategory)
  @JoinColumn()
  parentCategory?: Categorise;

  @Field((_type) => [Product], { nullable: true })
  @OneToMany((_type) => Product, (product) => product.category)
  products?: Product[];
}
