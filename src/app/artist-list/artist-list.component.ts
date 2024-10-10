import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import ArtistList from '../list/ArtistList';
import { ArtistListService } from '../services/artist-list/artist-list.service';
@Component({
  selector: 'app-artist-list',
  standalone: true,
  imports: [NgForOf, FormsModule],
  templateUrl: './artist-list.component.html',
  styleUrl: './artist-list.component.css'
})
export class ArtistListComponent {
  artistList = [] as ArtistList[];
  constructor(private artistService: ArtistListService){
    this.artistList = this.artistService.getArtists();
  }
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
      Artist: '',
    });
		this.artist = '';
		this.field = '';
		this.genre = '';
		this.country = '';
	}
}
