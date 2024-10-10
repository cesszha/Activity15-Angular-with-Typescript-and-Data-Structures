import { Injectable } from '@angular/core';
import FoodMenuList from '../../list/FoodMenu';
@Injectable({
  providedIn: 'root'
})
export class FoodMenuListService {
  private foodMenus: FoodMenuList[] = [];

  constructor() { }

  addFoodMenu(
    name: string,
	  price: number,
	  description: string,
	  rating: number,

  ): void {
    this.foodMenus.push({
      name: name,
      price: price,
      description: description,
      rating: rating,
    });
  }

  getFoodMenus(): FoodMenuList[]{
    return this.foodMenus;
  }
}
