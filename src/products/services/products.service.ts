import {
  Injectable,
  NotFoundException,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Product } from 'src/products/entities/product.entity';
import { CreateProductDto, UpdateProductDto } from 'src/products/dtos/products.dto';
@Injectable()
export class ProductsService {
  private counterId = 2;
  private products: Product[] = [
    {
      title: 'Shoes',
      id: this.counterId - 1,
      price: 10,
      stock: 100,
      description: 'fjakfj',
      image: 'jfdkajfk',
    },
    {
      title: 'Cap',
      id: this.counterId,
      price: 2,
      stock: 100,
      description: 'fjakfj',
      image: 'jfdkajfk',
    },
  ];
  findAll() {
    return this.products;
  }
  findOne(id: number) {
    //Se busca un item cuya id sea = a la dada
    const product = this.products.find((item) => item.id === id);
    if (product == undefined) {
      //Not found exception te tira un error pero evita el 500
      throw new NotFoundException('Product not found');
    }
    return product;
  }
  createOne(payload: CreateProductDto) {
    console.log(payload);
    this.counterId = this.counterId + 1;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, payload: UpdateProductDto) {
    const product = this.findOne(id);
    const index = this.products.findIndex((item) => item.id === id);
    if (typeof product == undefined || id > this.counterId) {
      //HttpException es otra forma de tirar el error sin detener el programa
      throw new HttpException('Not found', HttpStatus.BAD_REQUEST);
    }
    this.products[index] = {
      ...product,
      ...payload,
    };
    return this.products[index];
  }

  delete(id: number) {
    const index = this.products.findIndex((item) => item.id === id);
    if ((this.products[index] = undefined)) {
      throw new NotFoundException('Product not found');
    }
    this.products.splice(index, 1);
    return {
      message: `El producto número ${index + 1} ha sido eliminado`,
    };
  }
}
//funcionoooooooo
//Se utiliza NotFoundException para evitar un error 500 en el servidor
