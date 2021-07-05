import { ObjectType, Field } from '@nestjs/graphql';
import { Brand } from '../../brands/entities/brand.entity';
import { Categorise } from '../../categorise/entities/categorise.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
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

  @Field((_type) => Brand)
  @OneToOne((_type) => Brand, (brand) => brand)
  brand?: Brand;

  @Field((_type) => Categorise)
  @OneToOne((_type) => Categorise, (category) => category)
  category?: Categorise;

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
