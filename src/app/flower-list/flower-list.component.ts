import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForOf } from '@angular/common';
import FlowerList from '../list/FlowerList';
import { FlowerListService } from '../services/flower-list/flower-list.service';

@Component({
  selector: 'app-flower-list',
  standalone: true,
  imports: [FormsModule, NgForOf],
  templateUrl: './flower-list.component.html',
  styleUrl: './flower-list.component.css'
})
export class FlowerListComponent {
  flowerList = [] as FlowerList[];
	constructor(private flowerListService: FlowerListService){
		this.flowerList = this.flowerListService.getFlowers();
	}
	name: string = '';
	kind: string = '';
	price: number = 0;
	isAvailable: string = '';
	quantity: number = 0;

	addFlower() {
		this.flowerListService.addFlower(
			this.name,
			this.kind,
			this.price,
      		this.isAvailable,
			this.quantity,
		);

		this.name = '';
		this.kind = '';
		this.price = 0;
    	this.isAvailable = 'yes';
		this.quantity = 0;
	}
}
