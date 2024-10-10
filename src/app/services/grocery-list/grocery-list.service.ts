import { Injectable } from '@angular/core';
import GroceryList from '../../list/GroceyList';
@Injectable({
  providedIn: 'root'
})
export class GroceryListService {
  private groceries: GroceryList[] = [];

  constructor() { }

  addGrocery(
    name: string,
	  price: number,
	  description: string,
  ): void {
    this.groceries.push({
      name: name,
      price: price,
      description: description,
    });
  }

  getGroceries(): GroceryList[]{
    return this.groceries;
  }
}
