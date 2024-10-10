import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import PaintingList from '../list/PaintingList';
import { PaintingListService } from '../services/painting-list/painting-list.service';
@Component({
  selector: 'app-painting-list',
  standalone: true,
  imports: [NgForOf, FormsModule],
  templateUrl: './painting-list.component.html',
  styleUrl: './painting-list.component.css'
})
export class PaintingListComponent {
  paintingList = [] as PaintingList[];
 constructor(private paintingService: PaintingListService){
	this.paintingList = this.paintingService.getPaintings();
 }
	art: string = '';
	artist: string = '';
	year: number = 0;
	price: number = 0;

	addPainting() {
		this.paintingService.addPainting(
			this.art,
			this.artist,
			this.year,
			this.price,
		);
		this.art = '';
		this.artist = '';
		this.year = 0;
		this.price = 0;
	}

}
