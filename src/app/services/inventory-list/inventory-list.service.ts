import { Injectable } from '@angular/core';
import InventoryList from '../../list/InventoryList';
@Injectable({
  providedIn: 'root'
})
export class InventoryListService {
  private inventories: InventoryList[] = [];

  constructor() { }

  addInventory(
    id: number,
    name: string,
    quantity: number,
    price: number,
  ): void{
    this.inventories.push({
      id: id,
      name: name,
      quantity: quantity,
      price: price,
    });
  }

  getInventories(): InventoryList[]{
    return this.inventories;
  }
}
