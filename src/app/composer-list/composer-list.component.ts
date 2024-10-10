import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import ComposerList from '../list/ComposerList';
import { ComposerListService } from '../services/composer-list/composer-list.service';
@Component({
  selector: 'app-composer-list',
  standalone: true,
  imports: [NgForOf, FormsModule],
  templateUrl: './composer-list.component.html',
  styleUrl: './composer-list.component.css'
})
export class ComposerListComponent {
  composers = [] as ComposerList[];
  constructor(private composerService: ComposerListService){
	this.composers = this.composerService.getComposers();
  }
	composer: string = '';
	popularSong: string = '';
	genre: string = '';
	country: string = '';

	addComposer() {
		this.composerService.addComposer(
		this.composer,
		this.popularSong,
		this.genre,
		this.country,
		);

		this.composer = '';
		this.popularSong = '';
		this.genre = '';
		this.country = '';
	}
}
