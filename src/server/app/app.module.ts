import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConsoleModule } from 'nestjs-console';
import { join } from 'path';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { SeedService } from 'src/server/console/seed.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ThingsModule } from './things/things.module';
import { OrdersModule } from './orders/orders.module';
import { AttributesModule } from './attributes/attributes.module';
import { CategoriseModule } from './categorise/categorise.module';
import { BrandsModule } from './brands/brands.module';
import { ProductsModule } from './products/products.module';
import { NavigationsModule } from './navigations/navigations.module';
import { ImagesModule } from './images/images.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    TypeOrmModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DATABASE_HOST'),
        port: configService.get<number>('DATABASE_PORT'),
        username: configService.get<string>('DATABASE_USERNAME'),
        password: configService.get<string>('DATABASE_PASSWORD'),
        database: configService.get<string>('DATABASE_NAME'),
        synchronize: true,
        autoLoadEntities: true,
        ssl:
          configService.get<string>('NODE_ENV') === 'production'
            ? { rejectUnauthorized: false }
            : false,
      }),
      inject: [ConfigService],
    }),
    ConsoleModule,
    AuthModule,
    UsersModule,
    ThingsModule,
    OrdersModule,
    AttributesModule,
    CategoriseModule,
    BrandsModule,
    ProductsModule,
    NavigationsModule,
    ImagesModule,
  ],
  providers: [SeedService, AppService],
  controllers: [AppController],
})
export class AppModule {}
