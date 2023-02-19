import { user } from './user.entity';
import { Product } from 'src/products/entities/product.entity';

export class order {
  date: Date;
  user: user;
  products: Product[];
}
