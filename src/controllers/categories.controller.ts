import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get(':id/products/:productId')
  getProductAndCategory(
    @Param('productId') productId: string,
    @Param('id') id: string,
  ) {
    return `product ${productId} from category ${id}`;
  }
}
