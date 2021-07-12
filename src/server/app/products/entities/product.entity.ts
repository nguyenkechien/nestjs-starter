import { ObjectType, Field } from '@nestjs/graphql';
import { Brand } from '../../brands/entities/brand.entity';
import { Categorise } from '../../categorise/entities/categorise.entity';
import { Attribute } from '../../attributes/entities/attribute.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class Product {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ nullable: false })
  name: string;

  @Field()
  @Column({ nullable: false })
  price: number;

  @Field()
  @Column('text')
  description: string;

  @Field()
  @Column({ nullable: true, unique: true })
  slug: string;

  @Field((_type) => Brand)
  @ManyToOne((_type) => Brand, (brand) => brand.products, { nullable: false })
  brand?: Brand;

  @Field((_type) => Categorise)
  @ManyToOne((_type) => Categorise, (category) => category.products, {
    nullable: false,
  })
  category?: Categorise;

  @Field((_type) => [Attribute], { nullable: 'items' })
  @OneToMany((_type) => Attribute, (attributes) => attributes.product, {
    nullable: true,
  })
  attributes?: Attribute[];

  @Field()
  @Column({ type: 'boolean', default: false, nullable: false })
  isPublished: boolean;

  @Field()
  @Column({ nullable: true })
  publishStart: Date;

  @Field()
  @Column({ nullable: true })
  publishEnd: Date;

  @Field()
  @Column()
  @CreateDateColumn()
  created_at: Date;

  @Field()
  @Column()
  @UpdateDateColumn()
  updated_at: Date;
}
