import { Injectable } from '@angular/core';
import LaptopSpecs from '../../list/LaptopSpecList';
@Injectable({
  providedIn: 'root'
})
export class LaptopSpecListService {
  private laptopSpecs: LaptopSpecs[] = [];

  constructor() { }

  addLaptopSpecs(
    
	model: string,
	processor: string,
	ram: string,
	storage: string,
	display: string,
	graphics: string,

  ): void {
    this.laptopSpecs.push({
      model: model,
      processor: processor,
      ram: ram,
      storage: storage,
      display: display,
      graphics: graphics,
      specs: {
    },
    })
  }
  getLaptopSpecs(): LaptopSpecs[]{
    return this.laptopSpecs;
  }


}
