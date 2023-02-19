import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { CreateCategoryDto, UpdateCategoryDto } from 'src/products/dtos/categories.dto';
import { CategoriesService } from 'src/products/services/categories.service';
import { ProductsService } from 'src/products/services/products.service';
import { ParseIntPipe } from '../../common/parse-int/parse-int.pipe';
@Controller('categories')
export class CategoriesController {
  constructor(
    private categoriesService: CategoriesService,
    private productsService: ProductsService,
  ) {}
  @Post()
  createOne(@Body() payload: CreateCategoryDto) {
    return this.categoriesService.createOne(payload);
  }

  @Get()
  getCategories() {
    return this.categoriesService.findAll();
  }

  @Get(':categoryId')
  getOne(@Param('categoryId', ParseIntPipe) categoryId: number) {
    return this.categoriesService.findOne(categoryId);
  }

  @Put(':categoryId')
  update(
    @Param('categoryId', ParseIntPipe) categoryId: number,
    @Body() payload: UpdateCategoryDto,
  ) {
    return this.categoriesService.update(categoryId, payload);
  }

  @Delete(':categoryId')
  delete(@Param('categoryId', ParseIntPipe) categoryId: number) {
    return this.categoriesService.delete(categoryId);
  }

  @Get(':categoryId/products/:productId')
  getProductAndCategory(
    @Param('productId', ParseIntPipe) productId: number,
    @Param('categoryId', ParseIntPipe) categoryId: number,
  ) {
    return this.productsService.findOne(productId);
  }
}
