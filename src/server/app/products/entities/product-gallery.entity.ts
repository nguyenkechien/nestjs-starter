import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { Product } from './product.entity';
import {
  BaseEntity,
  DateAudit,
  EmptyClass,
} from 'src/server/common/types/base-entity';

@ObjectType()
@Entity()
export class ProductGallery extends DateAudit(BaseEntity(EmptyClass)) {
  @Field((_type) => [Product])
  @ManyToOne((_type) => Product, (product) => product.attributes, {
    nullable: false,
  })
  @JoinColumn({ referencedColumnName: 'id' })
  product?: Product;

  @Field()
  @Column({ nullable: false })
  imageUrl?: string;

  @Field()
  @Column()
  order?: number;
}
