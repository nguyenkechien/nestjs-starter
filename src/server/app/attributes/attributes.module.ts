import { Module } from '@nestjs/common';
import { AttributesService } from './attributes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Attribute } from './entities/attribute.entity';
import { ProductsModule } from '../products/products.module';
import { AttributesResolver } from './attributes.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Attribute]), ProductsModule],
  providers: [AttributesResolver, AttributesService],
  exports: [AttributesService],
})
export class AttributesModule {}
