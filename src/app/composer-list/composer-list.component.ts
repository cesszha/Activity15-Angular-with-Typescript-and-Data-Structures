import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import ComposerList from '../list/ComposerList';
@Component({
  selector: 'app-composer-list',
  standalone: true,
  imports: [NgForOf, FormsModule],
  templateUrl: './composer-list.component.html',
  styleUrl: './composer-list.component.css'
})
export class ComposerListComponent {
  composers: ComposerList[] = [];

	composer: string = '';
	popularSong: string = '';
	genre: string = '';
	country: string = '';

	addComposer() {
		this.composers.push({
			composer: this.composer,
			popularSong: this.popularSong,
			genre: this.genre,
			country: this.country,
		});

		this.composer = '';
		this.popularSong = '';
		this.genre = '';
		this.country = '';
	}
}
