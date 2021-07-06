import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { Product } from '../../products/entities/product.entity';

@ObjectType()
@Entity()
export class Categorise {
  @Field()
  @PrimaryGeneratedColumn()
  id?: number;

  @Field()
  @Column({ nullable: false })
  name?: string;

  @Field((_type) => Categorise, { nullable: true })
  @ManyToOne((_type) => Categorise, (cate) => cate.parentCategory)
  @JoinColumn()
  parentCategory?: Categorise;

  @Field()
  @Column('text')
  description: string;

  @Field((_type) => [Product], { nullable: 'items' })
  @OneToMany((_type) => Product, (product) => product.category)
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
