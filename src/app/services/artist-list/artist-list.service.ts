import { Injectable } from '@angular/core';
import ArtistList from '../../list/ArtistList';
@Injectable({
  providedIn: 'root'
})
export class ArtistListService {
   private artists: ArtistList[] = [];

  constructor() {}

  addArtist(
      artist: string,
      field: string,
      genre: string,
      country: string,
  ): void {
      this.artists.push({
        artist: artist,
        field: field,
        genre: genre,
        country: country,
        Artist: ''
      });
  }

  getArtists(): ArtistList[]{
    return this.artists;
  }
}
