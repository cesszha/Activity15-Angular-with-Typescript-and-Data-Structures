import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import TourList from '../list/TourList';
import { TourListService } from '../services/tour-list/tour-list.service';
@Component({
  selector: 'app-tour-list',
  standalone: true,
  imports: [NgForOf, FormsModule],
  templateUrl: './tour-list.component.html',
  styleUrl: './tour-list.component.css'
})
export class TourListComponent {
  tours = [] as TourList[];
constructor(private tourService: TourListService){
	this.tours = this.tourService.getTours();
}
	tourDate: string = '';
	tourName: string = '';
	tourLocation: string = '';
	tourPrice: number = 0;
	tourDuration: string = '';

	addTour() {
		this.tourService.addTour(
			this.tourDate,
			this.tourName,
			this.tourLocation,
			this.tourPrice,
			this.tourDuration,
		);

		this.tourDate = '';
		this.tourName = '';
		this.tourLocation = '';
		this.tourPrice = 0;
		this.tourDuration = '';
	}
}
