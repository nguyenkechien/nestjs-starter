import { ObjectType, Field } from '@nestjs/graphql';
import { Column, JoinColumn, ManyToOne } from 'typeorm';
import { Product } from '../../products/entities/product.entity';
import { Entity } from 'typeorm';
import {
  DateAudit,
  BaseEntity,
  CommonEntity,
} from 'src/server/common/types/base-entity';
@ObjectType()
@Entity()
export class Attribute extends DateAudit(BaseEntity(CommonEntity)) {
  @Field()
  @Column({ nullable: false })
  value?: string;

  @Field((_type) => Product)
  @ManyToOne((_type) => Product, (product) => product.attributes, {
    nullable: false,
  })
  @JoinColumn({ referencedColumnName: 'id' })
  product?: Product;
}
