import { Module } from '@nestjs/common';
import { CategoriseService } from './categorise.service';
import { CategoriseResolver } from './categorise.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categorise } from './entities/categorise.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Categorise])],
  providers: [CategoriseResolver, CategoriseService],
  exports: [CategoriseService],
})
export class CategoriseModule {}
