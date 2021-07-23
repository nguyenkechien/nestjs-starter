import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsResolver } from './products.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { CategoriseModule } from '../categorise/categorise.module';
import { BrandsModule } from '../brands/brands.module';
import { ProductGallery } from './entities/product-gallery.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product, ProductGallery]),
    CategoriseModule,
    BrandsModule,
  ],
  providers: [ProductsResolver, ProductsService],
  exports: [ProductsService],
})
export class ProductsModule {}
