import { Controller, Get, Query, Param } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get('filter')
  getProductsAndFilter() {
    return 'Its filtered';
  }

  @Get('')
  getProducts(
    @Query('limit') limit = 10,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ): string {
    return `Max ${limit} products and min ${offset} from ${brand} brand`;
  }

  @Get(':productId')
  getProduct(@Param('productId') productId: string) {
    return `product ${productId}`;
  }
}
