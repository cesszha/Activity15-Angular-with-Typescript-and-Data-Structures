import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Sports from '../list/SportsList';
import { SportsListService } from '../services/sports-list/sports-list.service';

@Component({
  selector: 'app-sports-list',
  standalone: true,
  imports: [NgForOf, FormsModule],
  templateUrl: './sports-list.component.html',
  styleUrl: './sports-list.component.css'
})
export class SportsListComponent {
  sports = [] as Sports[];
	constructor(private sportsService: SportsListService ){
		this.sports = this.sportsService.getSports();
	}
	name: string = '';
	team: string = '';

	addSport(): void {
		this.sportsService.addSports(
			this.name,
			this.team,
		);

		this.name = '';
		this.team = '';
	}
}
