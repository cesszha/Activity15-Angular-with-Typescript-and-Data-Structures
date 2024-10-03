import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Sports from '../list/SportsList';

@Component({
  selector: 'app-sports-list',
  standalone: true,
  imports: [NgForOf, FormsModule],
  templateUrl: './sports-list.component.html',
  styleUrl: './sports-list.component.css'
})
export class SportsListComponent {
  sports: Sports[] = [];

	name: string = '';
	team: string = '';

	addSport(): void {
		this.sports.push({
			name: this.name,
			team: this.team,
		});

		this.name = '';
		this.team = '';
	}
}
