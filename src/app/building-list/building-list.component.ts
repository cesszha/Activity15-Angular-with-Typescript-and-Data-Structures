import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import BuildingList from '../list/BuildingList';
@Component({
  selector: 'app-building-list',
  standalone: true,
  imports: [NgForOf, FormsModule],
  templateUrl: './building-list.component.html',
  styleUrl: './building-list.component.css'
})
export class BuildingListComponent {
  buildingList: BuildingList[] = [];

	building: string = '';
	address: string = '';
	floors: number = 0;
	rooms: number = 0;
	occupants: number = 0;

	addBuilding() {
		this.buildingList.push({
			bulding: this.building,
			address: this.address,
			floors: this.floors,
			rooms: this.rooms,
			occupants: this.occupants,
		});

		this.building = '';
		this.address = '';
		this.floors = 0;
		this.rooms = 0;
		this.occupants = 0;
	}
}
