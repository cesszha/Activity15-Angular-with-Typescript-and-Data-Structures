import { Injectable } from '@angular/core';
import FlowerList from '../../list/FlowerList';
@Injectable({
  providedIn: 'root'
})
export class FlowerListService {
  private flowers: FlowerList[] = [];

  constructor() { }

  addFlower(
    name: string,
	  kind: string,
	  price: number,
	  isAvailable: string,
	  quantity: number,
  ): void {
    this.flowers.push({
      name:name,
      kind: kind,
      price: price,
      isAvailable: isAvailable,
      quantity: quantity,
    });
  }
  getFlowers(): FlowerList[]{
    return this.flowers;
  }
}

