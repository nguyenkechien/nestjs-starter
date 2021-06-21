import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';

import { AppModule } from 'src/server/app/app.module';
import { ViewModule } from 'src/server/view/view.module';
import { AllExceptionFilter } from './common/filters/http-exception.filter';

@Module({
  imports: [AppModule, ViewModule],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionFilter,
    },
  ],
})
export class ServerModule {}
