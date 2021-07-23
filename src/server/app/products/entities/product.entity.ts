import { ObjectType, Field } from '@nestjs/graphql';
import { Brand } from '../../brands/entities/brand.entity';
import { Categorise } from '../../categorise/entities/categorise.entity';
import { Attribute } from '../../attributes/entities/attribute.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { ProductGallery } from './product-gallery.entity';
import {
  BaseEntity,
  DateAudit,
  CommonEntity,
} from 'src/server/common/types/base-entity';

@ObjectType()
@Entity()
export class Product extends DateAudit(BaseEntity(CommonEntity)) {
  @Field({ nullable: true })
  @Column({ nullable: false, default: 0 })
  price: number;

  @Field()
  @Column({ nullable: false, unique: true })
  sku: string;

  @Field((_type) => Brand, { nullable: true })
  @ManyToOne((_type) => Brand, (brand) => brand.products, { nullable: false })
  brand?: Brand;

  @Field((_type) => Categorise, { nullable: true })
  @ManyToOne((_type) => Categorise, (category) => category.products, {
    nullable: false,
  })
  category?: Categorise;

  @Field((_type) => [Attribute], { nullable: 'items' })
  @OneToMany((_type) => Attribute, (attributes) => attributes.product, {
    nullable: true,
  })
  attributes?: Attribute[];

  @Field((_type) => [ProductGallery], { nullable: 'items' })
  @OneToMany(
    (_type) => ProductGallery,
    (productGallery) => productGallery.product,
    { nullable: true },
  )
  gallery: ProductGallery[];
}
