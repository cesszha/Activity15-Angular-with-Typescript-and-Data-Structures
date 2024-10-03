import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import StationeryList from '../list/StationeryList';

@Component({
  selector: 'app-stationery-list',
  standalone: true,
  imports: [NgForOf, FormsModule],
  templateUrl: './stationery-list.component.html',
  styleUrl: './stationery-list.component.css'
})
export class StationeryListComponent {
  stationeryList: StationeryList[] = [];

	name: string = '';
	quantity: number = 0;
	price: number = 0;

	addNewStationery() {
		this.stationeryList.push({
			name: this.name,
			quantity: this.quantity,
			price: this.price,
		});
		this.name = '';
		this.quantity = 0;
		this.price = 0;
	}
}
