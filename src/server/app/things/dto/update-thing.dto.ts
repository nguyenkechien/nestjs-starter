import { CreateThingDto } from './create-thing.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateThingDto extends PartialType(CreateThingDto) {
  id: number;
}
