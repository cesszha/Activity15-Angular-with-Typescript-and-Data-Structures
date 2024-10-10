import { Injectable } from '@angular/core';
import TvShowList from '../../list/TVShowList';
@Injectable({
  providedIn: 'root'
})
export class TvShowListService {
private tvShows: TvShowList[]=[];

  constructor() { }
  addTvShow(

    channel: string,
    description: string,
    url: string ,
    rating: number,
    category: string,
  ): void {
    this.tvShows.push({
      channel: channel,
      description: description,
      url: url,
      rating: rating,
      category: category,
   
    });
  }
  getTvShows(): TvShowList[]{
    return this.tvShows;
  }
}
