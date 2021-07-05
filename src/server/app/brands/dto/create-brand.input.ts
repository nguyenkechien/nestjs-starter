import { InputType, Field } from '@nestjs/graphql';
@InputType()
export class CreateBrandInput {
  @Field()
  name: string;
  publish?: boolean;
  publish_start?: Date;
  publish_end?: Date;
}
