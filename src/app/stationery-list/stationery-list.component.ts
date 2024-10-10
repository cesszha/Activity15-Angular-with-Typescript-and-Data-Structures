import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import StationeryList from '../list/StationeryList';
import { StationeryListService } from '../services/stationery-list/stationery-list.service';
@Component({
  selector: 'app-stationery-list',
  standalone: true,
  imports: [NgForOf, FormsModule],
  templateUrl: './stationery-list.component.html',
  styleUrl: './stationery-list.component.css'
})
export class StationeryListComponent {
  stationeryList = [] as StationeryList[];
	constructor(private stationeryListService: StationeryListService){
		this.stationeryList = stationeryListService.getStationaries();
	}
	name: string = '';
	quantity: number = 0;
	price: number = 0;

	addNewStationery() {
		this.stationeryListService.addStationery(
			this.name,
			this.quantity,
			this.price,
		);
		this.name = '';
		this.quantity = 0;
		this.price = 0;
	}
}
