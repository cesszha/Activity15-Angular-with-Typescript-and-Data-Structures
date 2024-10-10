import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import CarModel from '../list/CarModelList'; 
import { CarModelListService } from '../services/car-model-list/car-model-list.service';

@Component({
  selector: 'app-car-model-list',
  standalone: true,
  imports: [NgForOf, FormsModule],
  templateUrl: './car-model-list.component.html',
  styleUrls: ['./car-model-list.component.css'] 
})
export class CarModelListComponent {
 
  carModels = [] as CarModel[];
  constructor(private carModelService: CarModelListService){
    this.carModels = this.carModelService.getCarModels();
  }
  name: string = '';
  year: number =0;
  model: string = '';
  price: number = 0;


  addCarModel() {
    this.carModelService.addCarModel(
        this.name,
		    this.year,
        this.model,
        this.price,
     
      );
      
      
      this.name = '';
      this.year = 0;
      this.model = '';
      this.price = 0;
  }
}