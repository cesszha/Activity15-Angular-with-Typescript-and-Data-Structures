import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import MusicPlayList from '../list/MusicPlaylist';

@Component({
  selector: 'app-music-playlist',
  standalone: true,
  imports: [NgForOf, FormsModule],
  templateUrl: './music-playlist.component.html',
  styleUrl: './music-playlist.component.css'
})
export class MusicPlaylistComponent {

  musicPlayList: MusicPlayList[] = [];
	name: string = '';
	artist: string = '';
	album: string = '';
	duration: string = '';
	genre: string = '';
	year: string = '';

	addMusicPlayList(): void {
		this.musicPlayList.push({
			name: this.name,
			artist: this.artist,
			album: this.album,
			duration: this.duration,
			genre: this.genre,
			year: this.year,
		});

		this.name = '';
		this.artist = '';
		this.album = '';
		this.duration = '';
		this.genre = '';
		this.year = '';
	}
}
