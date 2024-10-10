import { Injectable } from '@angular/core';
import CarModel from '../../list/CarModelList';
@Injectable({
  providedIn: 'root'
})
export class CarModelListService {
    private carModels: CarModel[] = [];

  constructor() {}

  addCarModel(
    name: string,
    year: number,
    model: string,
    price: number,
  ): void {
    this.carModels.push({
      name: name,
      year: year,
      model: model,
      price: price,
    }); 
  }
  getCarModels(): CarModel[] {
    return this.carModels;
  }
}
