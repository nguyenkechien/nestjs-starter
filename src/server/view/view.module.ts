import { Module } from '@nestjs/common';
import { ThingsModule } from '../app/things/things.module';

import { ViewController } from './view.controller';
import { ViewService } from './view.service';

@Module({
  imports: [ThingsModule],
  providers: [ViewService],
  controllers: [ViewController],
})
export class ViewModule {}
