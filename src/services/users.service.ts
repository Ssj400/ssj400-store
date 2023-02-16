import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { user } from '../entities/user.entity';
import { UpdateUserDto, CreateUserDto } from 'src/DTOs/users.dto';
@Injectable()
export class UsersService {
  private counterId = 1;
  private users: user[] = [
    {
      username: 'Ssj400',
      age: 39,
      gmail: 'hola@gmail.com',
      password: 'J39?fd**',
      id: this.counterId,
    },
  ];

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((item) => item.id === id);
    if (user == undefined) {
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
    }
    return user;
  }

  createOne(payload: CreateUserDto) {
    console.log(payload);
    this.counterId = this.counterId + 1;
    const newUser = {
      id: this.counterId,
      ...payload,
    };
    this.users.push(newUser);
    return newUser;
  }

  update(payload: UpdateUserDto, id: number) {
    let user = this.findOne(id);
    if (typeof user == undefined || id > this.counterId) {
      throw new HttpException('Not found', HttpStatus.BAD_REQUEST);
    }
    user = {
      ...user,
      ...payload,
    };
    return user;
  }

  delete(id: number) {
    const index = this.users.findIndex((item) => item.id === id);
    if (this.users[index] == undefined) {
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
    }
    this.users.splice(index, 1);
    return {
      message: `El usuario numero ${index + 1} ha sido eliminado`,
    };
  }
}
