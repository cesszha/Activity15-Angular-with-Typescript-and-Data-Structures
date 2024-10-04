import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import ArtistList from '../list/ArtistList';
@Component({
  selector: 'app-artist-list',
  standalone: true,
  imports: [NgForOf, FormsModule],
  templateUrl: './artist-list.component.html',
  styleUrl: './artist-list.component.css'
})
export class ArtistListComponent {
  artistList: ArtistList[] = [];

	artist: string = '';
	field: string = '';
	genre: string = '';
	country: string = '';

	addArtist() {
		this.artistList.push({
      artist: this.artist,
      field: this.field,
      genre: this.genre,
      country: this.country,
      Artist: ''
    });
		this.artist = '';
		this.field = '';
		this.genre = '';
		this.country = '';
	}
}
