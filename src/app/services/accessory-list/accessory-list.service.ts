import { Injectable } from '@angular/core';
import AccessoryList from '../../list/AcessorryList';
@Injectable({
  providedIn: 'root'
})
export class AccessoryListService {
  private accessories: AccessoryList[] = [];

  constructor() { }
  addAccessory(name: string, description: string, price: number, type: string, category: string): void {
    this.accessories.push({
      name: name,
      description: description,
      price: price,
      type: type,
      category: category,
    });
  }

  getAccessories(): AccessoryList[] {
    return this.accessories;
  }
}
