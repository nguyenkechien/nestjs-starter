import { ObjectType, Field } from '@nestjs/graphql';
import {
  Column,
  PrimaryGeneratedColumn,
  Entity,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class Navigation {
  @Field()
  @PrimaryGeneratedColumn()
  id?: number;

  @Field()
  @Column({ nullable: false })
  name?: string;

  @Field((_type) => Navigation, { nullable: true })
  @ManyToOne((_type) => Navigation, (cate) => cate.parentNavigation, {
    nullable: true,
  })
  @JoinColumn()
  parentNavigation?: Navigation;

  @Field()
  @Column('text')
  description: string;

  @Field()
  @Column({ nullable: true, unique: true })
  slug: string;

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
