import { ObjectType, Field } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Product } from '../../products/entities/product.entity';
import { Entity } from 'typeorm';

@ObjectType()
@Entity()
export class Attribute {
  @Field()
  @PrimaryGeneratedColumn()
  id?: number;

  @Field()
  @Column({ nullable: false })
  name?: string;

  @Field()
  @Column({ nullable: false })
  value?: string;

  @Field()
  @Column({ type: 'text', nullable: true })
  description?: string;

  @Field()
  @Column({ nullable: true, unique: true })
  slug: string;

  @Field((_type) => [Product])
  @ManyToOne((_type) => Product, (product) => product.attributes, {
    nullable: false,
  })
  @JoinColumn({ referencedColumnName: 'id' })
  product?: Product;

  @Field()
  @Column({ type: 'boolean', default: true, nullable: true })
  isPublished: boolean;

  @Field((_type) => Date)
  @Column({ nullable: true })
  publishStart: Date;

  @Field((_type) => Date)
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
