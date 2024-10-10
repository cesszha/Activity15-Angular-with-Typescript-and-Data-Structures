import { Injectable } from '@angular/core';
import Product from '../../list/ProductList';
@Injectable({
  providedIn: 'root'
})
export class ProductListService {
private products: Product[] = [];

  constructor() { }

  addProduct( 
    name: string, 
    price: number): void {
    this.products.push({
      name: name,
      price: price,
    });
  }
  getProducts(): Product[]{
    return this.products;
  }
}
