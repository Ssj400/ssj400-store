import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { brand } from '../entities/brand.entities';
import { CreateBrandDto, UpdateBrandDto } from 'src/DTOs/brands.dto';
@Injectable()
export class BrandsService {
  private counterId = 1;
  private brands: brand[] = [
    {
      brandname: 'LG',
      logo: 'www.miel.com',
      slogan: 'fjalkfjlajdlf',
      id: 1,
    },
  ];

  findAll() {
    return this.brands;
  }

  findOne(id: number) {
    const brand = this.brands.find((item) => item.id === id);
    if (brand == undefined) {
      throw new HttpException('Not found', HttpStatus.BAD_REQUEST);
    }
    return brand;
  }

  createOne(payload: CreateBrandDto) {
    console.log(payload);
    this.counterId = this.counterId + 1;
    const newBrand = {
      id: this.counterId,
      ...payload,
    };
    this.brands.push(newBrand);
    return newBrand;
  }

  update(id: number, payload: UpdateBrandDto) {
    const brand = this.findOne(id);
    const index = this.brands.findIndex((item) => item.id === id);
    if (typeof brand == undefined || id > this.counterId) {
      //HttpException es otra forma de tirar el error sin detener el programa
      throw new HttpException('Not found', HttpStatus.BAD_REQUEST);
    }
    this.brands[index] = {
      ...brand,
      ...payload,
    };
    return this.brands[index];
  }

  delete(id: number) {
    const index = this.brands.findIndex((item) => item.id === id);
    if (this.brands[index] == undefined) {
      throw new HttpException('Brand not found', HttpStatus.BAD_REQUEST);
    }
    this.brands.splice(index, 1);
    return {
      message: `La marca numero ${index + 1} ha sido eliminada`,
    };
  }
}
