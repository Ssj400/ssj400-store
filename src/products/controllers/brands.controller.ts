import {
  Controller,
  Body,
  Post,
  Put,
  Delete,
  Param,
  Get,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CreateBrandDto, UpdateBrandDto } from 'src/products/dtos/brands.dto';
import { BrandsService } from 'src/products/services/brands.service';
import { ParseIntPipe } from '../../common/parse-int/parse-int.pipe';

@ApiTags('Brands')
@Controller('brands')
export class BrandsController {
  constructor(private brandsService: BrandsService) {}
  @Post()
  createOne(@Body() payload: CreateBrandDto) {
    return this.brandsService.createOne(payload);
  }

  @Get()
  getBrands() {
    return this.brandsService.findAll();
  }

  @Get(':brandId')
  getOne(@Param('brandId', ParseIntPipe) brandId: number) {
    return this.brandsService.findOne(brandId);
  }

  @Put(':brandId')
  update(
    @Param('brandId', ParseIntPipe) brandId: number,
    @Body() payload: UpdateBrandDto,
  ) {
    return this.brandsService.update(brandId, payload);
  }

  @Delete(':brandId')
  delete(@Param('brandId', ParseIntPipe) brandId: number) {
    return this.brandsService.delete(brandId);
  }
}
