import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, ManyToOne, JoinColumn } from 'typeorm';
import {
  DateAudit,
  BaseEntity,
  CommonEntity,
} from 'src/server/common/types/base-entity';
@ObjectType()
@Entity()
export class Navigation extends DateAudit(BaseEntity(CommonEntity)) {
  @Field((_type) => Navigation, { nullable: true })
  @ManyToOne((_type) => Navigation, (cate) => cate.parentNavigation, {
    nullable: true,
  })
  @JoinColumn()
  parentNavigation?: Navigation;
}
