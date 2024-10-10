import { Injectable } from '@angular/core';
import ComposerList from '../../list/ComposerList';
@Injectable({
  providedIn: 'root'
})
export class ComposerListService {
  private composers: ComposerList[] = [];
  constructor() { }

    addComposer(
      composer: string,
	    popularSong: string,
	    genre: string,
	    country: string,
    ): void {
      this.composers.push({
        composer: composer,
        popularSong: popularSong,
        genre: genre,
        country: country,

      });
    }

    getComposers(): ComposerList[]{
      return this.composers;
    }
}
