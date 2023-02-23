import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ParseIntPipe } from 'src/common/parse-int/parse-int.pipe';
import { CreateUserDto, UpdateUserDto } from 'src/users/dtos/users.dto';
import { UsersService } from 'src/users/services/users.service';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get()
  getUsers() {
    return this.usersService.findAll();
  }

  @Get(':userId')
  getUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.usersService.findOne(userId);
  }

  @Get(':userId/orders')
  getOrders(@Param('userId', ParseIntPipe) userId: number) {
    return this.usersService.getOrdersByUsers(userId);
  }

  @Post()
  createOne(@Body() payload: CreateUserDto) {
    return this.usersService.createOne(payload);
  }

  @Put(':userId')
  Update(
    @Param('userId', ParseIntPipe) userId: number,
    @Body() payload: UpdateUserDto,
  ) {
    return this.usersService.update(payload, userId);
  }

  @Delete(':userId')
  delete(@Param('userId', ParseIntPipe) userId: number) {
    return this.usersService.delete(userId);
  }
}
