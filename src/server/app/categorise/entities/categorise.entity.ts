import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
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
  id: number;

  @Field()
  @Column({ nullable: false })
  name: string;

  @Field((_type) => [Categorise], { nullable: 'items' })
  @OneToOne((_type) => Categorise, { nullable: true })
  @JoinColumn({ referencedColumnName: 'id' })
  parentCategory: Categorise;

  @Field((_type) => [Product], { nullable: 'items' })
  @OneToMany((_type) => Product, (product) => product)
  products?: Product[];

  @Field()
  @Column({ type: 'boolean', default: false, nullable: false })
  publish: boolean;

  @Field((_type) => Date)
  @Column({ nullable: true })
  publish_start: Date;

  @Field((_type) => Date)
  @Column({ nullable: true })
  publish_end: Date;

  @Field()
  @Column()
  @CreateDateColumn()
  created_at: Date;

  @Field()
  @Column()
  @UpdateDateColumn()
  updated_at: Date;
}
