import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class Product {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  price: number;

  @Field()
  @Column({ nullable: false })
  name: string;

  // @Field()
  // @Column()
  // attributes: []

  @Field()
  @Column()
  @CreateDateColumn()
  created_at: Date;

  @Field()
  @Column()
  @UpdateDateColumn()
  updated_at: Date;
}
