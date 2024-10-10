import { Injectable } from '@angular/core';
import FruitList from '../../list/FruitList';
@Injectable({
  providedIn: 'root'
})
export class FruitListService {
    private fruits: FruitList[] = [];

  constructor() { }

  addFruit(id: string, name: string, quantity: number, price: number ): void {
    this.fruits.push({
      id: id,
	    name: name,
	    quantity: quantity,
	    price: price,
    });
  }

  getFruits(): FruitList[]{
    return this.fruits;
  }
}
