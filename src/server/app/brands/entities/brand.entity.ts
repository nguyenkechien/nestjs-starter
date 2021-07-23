import { ObjectType, Field } from '@nestjs/graphql';
import {
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Product } from '../../products/entities/product.entity';
import { Entity } from 'typeorm';
import {
  DateAudit,
  BaseEntity,
  CommonEntity,
} from 'src/server/common/types/base-entity';
@ObjectType()
@Entity()
export class Brand extends DateAudit(BaseEntity(CommonEntity)) {
  @Field((_type) => [Product], { nullable: 'items' })
  @OneToMany((_type) => Product, (product) => product)
  products?: Product[];
}
