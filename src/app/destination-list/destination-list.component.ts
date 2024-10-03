import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForOf } from '@angular/common';
import DestinationList from '../list/DestinationList';
@Component({
  selector: 'app-destination-list',
  standalone: true,
  imports: [FormsModule, NgForOf],
  templateUrl: './destination-list.component.html',
  styleUrl: './destination-list.component.css'
})
export class DestinationListComponent {
  destinations: DestinationList[] = [];

	name: string = '';
	time: string = '';
	location: string = '';

	addDestination() {
		this.destinations.push({
			name: this.name,
			time: this.time,
			location: this.location,
		});
		this.name = '';
		this.time = '';
		this.location = '';
	}
}
