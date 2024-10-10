import { Injectable } from '@angular/core';
import MusicPlayList from '../../list/MusicPlaylist';
@Injectable({
  providedIn: 'root'
})
export class MusicPlaylistService {
  private musicPlayList: MusicPlayList[] = [];

  constructor() { }

  addMusicPlayList(
    name: string,
	  artist: string,
	  album: string,
	  duration: string,
	  genre: string,
	  year: number,
  ): void{
    this.musicPlayList.push({
      name: name,
      artist: artist,
      album: album,
      duration: duration,
      genre: genre,
      year: year,
    });
  }

  getMusicPlayList(): MusicPlayList[] {
    return this.musicPlayList;
  }
}
