import {
  Controller,
  Get,
  Put,
  Delete,
  Post,
  Param,
  Body,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ParseIntPipe } from 'src/common/parse-int/parse-int.pipe';
import {
  CreateCustomerDto,
  UpdateCustomerDto,
} from 'src/users/dtos/customers.dto';
import { CustomersService } from 'src/users/services/customers.service';

@ApiTags('Customers')
@Controller('customers')
export class CustomersController {
  constructor(private customersService: CustomersService) {}
  @Post()
  createOne(@Body() payload: CreateCustomerDto) {
    return this.customersService.createOne(payload);
  }

  @Get()
  getcustomers() {
    return this.customersService.findAll();
  }

  @Get(':customerId')
  getOne(@Param('customerId', ParseIntPipe) customerId: number) {
    return this.customersService.findOne(customerId);
  }

  @Put(':customerId')
  update(
    @Param('customerId', ParseIntPipe) customerId: number,
    @Body() payload: UpdateCustomerDto,
  ) {
    return this.customersService.update(customerId, payload);
  }

  @Delete(':customerId')
  delete(@Param('customerId', ParseIntPipe) customerId: number) {
    return this.customersService.delete(customerId);
  }
}
