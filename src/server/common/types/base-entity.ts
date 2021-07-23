import { Field, ObjectType } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
// eslint-disable-next-line @typescript-eslint/ban-types
export type Constructor<T = {}> = new (...args: any[]) => T;

const isAbstract = true;
export function BaseEntity<TBase extends Constructor>(Base: TBase) {
  @ObjectType({ isAbstract })
  abstract class AbstractBase extends Base {
    @Field()
    @PrimaryGeneratedColumn()
    id: number;

    @Field({ nullable: false })
    @Column({ nullable: false })
    title!: string;

    @Field({ nullable: true })
    @Column({ nullable: true })
    name!: string;

    @Field({ nullable: true })
    @Column('text', { nullable: true })
    description!: string;

    @Field({ nullable: true })
    @Column({ nullable: true, unique: true })
    code!: string;
  }
  return AbstractBase;
}

export function DateAudit<TBase extends Constructor>(Base: TBase) {
  @ObjectType({ isAbstract })
  abstract class AbstractBase extends Base {
    @Field()
    @Column()
    @CreateDateColumn()
    created_at!: Date;

    @Field()
    @Column()
    @UpdateDateColumn()
    updated_at!: Date;
  }
  return AbstractBase;
}

@ObjectType()
export class CommonEntity {
  @Field({ nullable: true })
  @Column({ nullable: true, unique: true })
  slug!: string;

  @Field({ nullable: true })
  @Column({ type: 'boolean', default: false, nullable: true })
  isPublished!: boolean;

  @Field((_type) => Date, { nullable: true })
  @Column({ nullable: true })
  publishStart!: Date;

  @Field((_type) => Date, { nullable: true })
  @Column({ nullable: true })
  publishEnd!: Date;
}

export class EmptyClass {}
