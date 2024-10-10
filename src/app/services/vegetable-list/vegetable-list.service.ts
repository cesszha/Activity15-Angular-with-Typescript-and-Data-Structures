import { Injectable } from '@angular/core';
import Vegetables from '../../list/VegetableList';
@Injectable({
  providedIn: 'root'
})
export class VegetableListService {
private vegetables: Vegetables[] = [];

  constructor() { }

  addVegetable(
    vegetable: string,
	  price: number,
  ): void {
    this.vegetables.push({
      vegetable: vegetable,
      price: price,
    });
  }

  getVegetables(): Vegetables[]{
    return this.vegetables;
  }
}
