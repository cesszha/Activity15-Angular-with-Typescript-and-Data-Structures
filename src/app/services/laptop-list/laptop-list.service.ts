import { Injectable } from '@angular/core';
import LaptopList from '../../list/LaptopList';
@Injectable({
  providedIn: 'root'
})
export class LaptopListService {
  private laptops: LaptopList[] = [];

  constructor() { }

  addLaptop(
    id: number,
	  model: string,
	  brand: string,
	  price: number,
	  processor: string,
	  ram: string,
	  storage: string,
  	display: string,
	  graphics: string,
  ): void{
    this.laptops.push({
      id: id,
      model: model,
      brand: brand,
      price: price,
      processor: processor,
      ram: ram,
      storage: storage,
      display: display,
      graphics: graphics,
    });
  }

  getLaptops(): LaptopList[]{
    return this.laptops;
  }
}
