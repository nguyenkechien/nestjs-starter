import { ObjectType, Field } from '@nestjs/graphql';
import { Column, Entity } from 'typeorm';
import {
  DateAudit,
  BaseEntity,
  EmptyClass,
} from 'src/server/common/types/base-entity';

@ObjectType()
@Entity()
export class Image extends DateAudit(BaseEntity(EmptyClass)) {
  @Field({ nullable: true })
  @Column({ default: '' })
  alt!: string;

  @Field({ nullable: true })
  @Column({ default: '' })
  type!: string;

  @Field({ nullable: true })
  @Column({ default: '' })
  size!: string;

  @Field({ nullable: true })
  @Column({ default: '' })
  imageUrl!: string;
}
