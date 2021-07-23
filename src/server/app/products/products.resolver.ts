import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { ProductsService } from './products.service';
import { Product } from './entities/product.entity';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { GqlAuthGuard } from '../auth/graphql/gql-auth.guard';
import { UseGuards, Inject } from '@nestjs/common';
import { FindManyOptions } from 'typeorm';
import { BrandsService } from '../brands/brands.service';
import { CategoriseService } from '../categorise/categorise.service';

@Resolver(() => Product)
export class ProductsResolver {
  constructor(
    @Inject(ProductsService) private productsService: ProductsService,
    @Inject(BrandsService) private brandsService: BrandsService,
    @Inject(CategoriseService) private categoryService: CategoriseService,
  ) {}

  @Mutation(() => Product)
  // @UseGuards(GqlAuthGuard)
  createProduct(
    @Args('createProductInput') createProductInput: CreateProductInput,
  ) {
    return this.productsService.findOrCreate(createProductInput);
  }

  @Query(() => [Product], { name: 'products' })
  findAll(params: FindManyOptions<Product> = {}) {
    return this.productsService.findAll(params);
  }

  @Query(() => Product, { name: 'product' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.productsService.findOne({ where: { id } });
  }

  @Mutation(() => Product)
  updateProduct(
    @Args('updateProductInput') updateProductInput: UpdateProductInput,
  ) {
    return this.productsService.updateOrCreate(
      updateProductInput.id,
      updateProductInput,
    );
  }

  @Mutation(() => Product)
  // @UseGuards(GqlAuthGuard)
  removeProduct(@Args('id', { type: () => Int }) id: number) {
    return this.productsService.remove(id);
  }

  @ResolveField()
  brand(@Parent() product: Product) {
    return this.brandsService.findOne({ where: { id: product.brand.id } });
  }

  @ResolveField()
  category(@Parent() product: Product) {
    return this.categoryService.findOne({ where: { id: product.category.id } });
  }

  @ResolveField()
  gallery(@Parent() product: Product) {
    if (!product.gallery) return [];
    return product.gallery.map((item) => item);
  }
}
