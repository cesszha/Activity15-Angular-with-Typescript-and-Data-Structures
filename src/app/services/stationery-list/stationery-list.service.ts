import { Injectable } from '@angular/core';
import StationeryList from '../../list/StationeryList';
@Injectable({
  providedIn: 'root'
})
export class StationeryListService {
private stationaries: StationeryList[] = [];

  constructor() { }

  addStationery(
    name: string, 
	  quantity: number,
	  price: number,
  ): void {
    this.stationaries.push({
      name: name,
      quantity: quantity,
      price: price,
    });

  }
  getStationaries(): StationeryList[]{
    return this.stationaries;
  }
}
