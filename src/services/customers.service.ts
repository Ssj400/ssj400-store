import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { customer } from 'src/entities/customer.entities';
import { CreateCustomerDto, UpdateCustomerDto } from 'src/DTOs/customers.dto';

@Injectable()
export class CustomersService {
  private counterId = 1;
  private customers: customer[] = [
    {
      customerName: 'Juan',
      customerLastName: 'Zarpullido',
      phone: 923458321,
      id: 1,
    },
  ];
  findAll() {
    return this.customers;
  }

  findOne(id: number) {
    const customer = this.customers.find((item) => item.id === id);
    if (customer == undefined) {
      throw new HttpException('Not found', HttpStatus.BAD_REQUEST);
    }
    return customer;
  }

  createOne(payload: CreateCustomerDto) {
    console.log(payload);
    this.counterId = this.counterId + 1;
    const newcustomer = {
      id: this.counterId,
      ...payload,
    };
    this.customers.push(newcustomer);
    return newcustomer;
  }

  update(id: number, payload: UpdateCustomerDto) {
    const customer = this.findOne(id);
    const index = this.customers.findIndex((item) => item.id === id);
    if (typeof customer == undefined || id > this.counterId) {
      //HttpException es otra forma de tirar el error sin detener el programa
      throw new HttpException('Not found', HttpStatus.BAD_REQUEST);
    }
    this.customers[index] = {
      ...customer,
      ...payload,
    };
    return this.customers[index];
  }

  delete(id: number) {
    const index = this.customers.findIndex((item) => item.id === id);
    if (this.customers[index] == undefined) {
      throw new HttpException('customer not found', HttpStatus.BAD_REQUEST);
    }
    this.customers.splice(index, 1);
    return {
      message: `The customer number ${index + 1} has been deleted`,
    };
  }
}
