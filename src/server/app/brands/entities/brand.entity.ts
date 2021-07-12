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

@ObjectType()
@Entity()
export class Brand {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ nullable: false, unique: true })
  name: string;

  @Field()
  @Column('text')
  description: string;

  @Field()
  @Column({ nullable: true, unique: true })
  slug: string;

  @Field((_type) => [Product], { nullable: 'items' })
  @OneToMany((_type) => Product, (product) => product)
  products?: Product[];

  @Field()
  @Column({ type: 'boolean', default: false, nullable: false })
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
