import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CommonInput {
  @Field({
    nullable: true,
    description: 'This field is slug',
  })
  slug?: string;

  @Field(() => Boolean, {
    nullable: true,
    description: 'This field set is published',
  })
  isPublished?: boolean;

  @Field(() => Date, {
    nullable: true,
    description: 'This field set date start publish',
  })
  publishStart?: Date;

  @Field(() => Date, {
    nullable: true,
    description: 'This field set date end publish',
  })
  publishEnd?: Date;
}

export class CommonDto {
  slug?: string;
  isPublished?: boolean;
  publishStart?: Date;
  publishEnd?: Date;
}
