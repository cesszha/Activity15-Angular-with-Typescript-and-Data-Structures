import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import MusicPlayList from '../list/MusicPlaylist';
import { MusicPlaylistService } from '../services/music-playlist/music-playlist.service';

@Component({
  selector: 'app-music-playlist',
  standalone: true,
  imports: [NgForOf, FormsModule],
  templateUrl: './music-playlist.component.html',
  styleUrl: './music-playlist.component.css'
})
export class MusicPlaylistComponent {

  musicPlayList = [] as  MusicPlayList[];
	constructor (private musicPlayListService: MusicPlaylistService){
		this.musicPlayList = this.musicPlayListService.getMusicPlayList();
	}

	name: string = '';
	artist: string = '';
	album: string = '';
	duration: string = '';
	genre: string = '';
	year: number = 0;

	addMusicPlayList(): void {
		this.musicPlayListService.addMusicPlayList(
			this.name,
			 this.artist,
			 this.album,
			 this.duration,
			 this.genre,
			 this.year,
		);

		this.name = '';
		this.artist = '';
		this.album = '';
		this.duration = '';
		this.genre = '';
		this.year = 0;
	}
}
