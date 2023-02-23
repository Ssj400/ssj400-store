import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
  Query,
  // ParseIntPipe,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { ProductsService } from 'src/products/services/products.service';
import { ParseIntPipe } from '../../common/parse-int/parse-int.pipe';
import {
  CreateProductDto,
  UpdateProductDto,
} from 'src/products/dtos/products.dto';

//Agrupar endpoints
@ApiTags('Products')
@Controller('products')
export class ProductsController {
  //Se implementa el servicio dentro del controlador
  constructor(private productsService: ProductsService) {}
  @Post()
  //Descripción a los endpoints
  @ApiOperation({ summary: 'Create a product' })
  createOne(@Body() payload: CreateProductDto) {
    return this.productsService.createOne(payload);
  }

  @Get('filter')
  getFilter() {
    return {
      message: 'Its filtered',
    };
  }

  // @Query('offset') offset = 0,
  // @Query('limit') limit = 10,
  // @Query('brand') brand: string,

  @Get('')
  getProducts(
    @Query('offset') offset = 0,
    @Query('limit') limit = 10,
    @Query('brand') brand: string,
  ) {
    return this.productsService.findAll();
    // return {
    //   message: `Max ${limit} products and min ${offset} from ${brand} brand`,
    // };
  }

  @Get(':productId')
  //Modificar la respuesta de http.
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('productId', ParseIntPipe) productId: number) {
    // return {
    //   message: `product ${productId}`,
    // };
    return this.productsService.findOne(productId);
  }

  @Put(':productId')
  update(
    @Param('productId', ParseIntPipe) productId: number,
    @Body() payload: UpdateProductDto,
  ) {
    return this.productsService.update(productId, payload);
  }

  @Delete(':productId')
  delete(@Param('productId', ParseIntPipe) productId: number) {
    return this.productsService.delete(productId);
  }
}
