import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controllers/products.controller';
import { CategoriesController } from './controllers/categories.controller';
import { UsersController } from './controllers/users.controller';
import { OrdersController } from './controllers/orders.controller';
import { BrandsController } from './controllers/brands.controller';
import { CustomersController } from './controllers/customers.controller';

@Module({
  imports: [],
  controllers: [AppController, ProductsController, CategoriesController, UsersController, OrdersController, BrandsController, CustomersController],
  providers: [AppService],
})
export class AppModule {}