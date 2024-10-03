import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForOf } from '@angular/common';
import FlowerList from '../list/FlowerList';

@Component({
  selector: 'app-flower-list',
  standalone: true,
  imports: [FormsModule, NgForOf],
  templateUrl: './flower-list.component.html',
  styleUrl: './flower-list.component.css'
})
export class FlowerListComponent {
  flowerList: FlowerList[] = [];

	name: string = '';
	kind: string = '';
	price: number = 0;
	isAvailable: string = '';
	quantity: number = 0;

	addFlower() {
		this.flowerList.push({
			name: this.name,
			kind: this.kind,
			price: this.price,
      isAvailable: this.isAvailable,
			quantity: this.quantity,
		});

		this.name = '';
		this.kind = '';
		this.price = 0;
    this.isAvailable = 'yes';
		this.quantity = 0;
	}
}