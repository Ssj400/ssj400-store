import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { category } from '../entities/category.entities';
import { CreateCategoryDto, UpdateCategoryDto } from 'src/products/dtos/categories.dto';
@Injectable()
export class CategoriesService {
  private counterId = 1;
  private categories: category[] = [
    {
      categoryName: 'Technology',
      id: 1,
    },
  ];
  findAll() {
    return this.categories;
  }

  findOne(id: number) {
    const category = this.categories.find((item) => item.id === id);
    if (category == undefined) {
      throw new HttpException('Not found', HttpStatus.BAD_REQUEST);
    }
    return category;
  }

  createOne(payload: CreateCategoryDto) {
    console.log(payload);
    this.counterId = this.counterId + 1;
    const newcategory = {
      id: this.counterId,
      ...payload,
    };
    this.categories.push(newcategory);
    return newcategory;
  }

  update(id: number, payload: UpdateCategoryDto) {
    const category = this.findOne(id);
    const index = this.categories.findIndex((item) => item.id === id);
    if (typeof category == undefined || id > this.counterId) {
      //HttpException es otra forma de tirar el error sin detener el programa
      throw new HttpException('Not found', HttpStatus.BAD_REQUEST);
    }
    this.categories[index] = {
      ...category,
      ...payload,
    };
    return this.categories[index];
  }

  delete(id: number) {
    const index = this.categories.findIndex((item) => item.id === id);
    if (this.categories[index] == undefined) {
      throw new HttpException('Category not found', HttpStatus.BAD_REQUEST);
    }
    this.categories.splice(index, 1);
    return {
      message: `The category number ${index + 1} has been deleted`,
    };
  }
}
