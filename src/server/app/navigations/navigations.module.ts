import { Module } from '@nestjs/common';
import { NavigationsService } from './navigations.service';
import { NavigationsResolver } from './navigations.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Navigation } from './entities/navigation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Navigation])],
  providers: [NavigationsResolver, NavigationsService],
  exports: [NavigationsService],
})
export class NavigationsModule {}
