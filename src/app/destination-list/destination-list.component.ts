import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForOf } from '@angular/common';
import DestinationList from '../list/DestinationList';
import { DestinationListService } from '../services/destination-list/destination-list.service';
@Component({
  selector: 'app-destination-list',
  standalone: true,
  imports: [FormsModule, NgForOf],
  templateUrl: './destination-list.component.html',
  styleUrl: './destination-list.component.css'
})
export class DestinationListComponent {
  destinations = [] as DestinationList[];
  constructor(private destinationListService: DestinationListService){
		this.destinations = this.destinationListService.getDestinations();
  }

	name: string = '';
	time: string = '';
	location: string = '';

	addDestination() {
		this.destinationListService.addDestination(
		this.name,
		this.time,
		this.location,
		);
		this.name = '';
		this.time = '';
		this.location = '';
	}
}
