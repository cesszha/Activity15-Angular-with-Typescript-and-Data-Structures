import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import PaintingList from '../list/PaintingList';
@Component({
  selector: 'app-painting-list',
  standalone: true,
  imports: [NgForOf, FormsModule],
  templateUrl: './painting-list.component.html',
  styleUrl: './painting-list.component.css'
})
export class PaintingListComponent {
  paintingList: PaintingList[] = [];

	art: string = '';
	artist: string = '';
	year: number = 0;
	price: number = 0;

	addPainting() {
		this.paintingList.push({
			art: this.art,
			artist: this.artist,
			year: this.year,
			price: this.price,
		});
		this.art = '';
		this.artist = '';
		this.year = 0;
		this.price = 0;
	}
}
