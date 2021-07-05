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
  @Column({ nullable: false })
  name: string;

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
