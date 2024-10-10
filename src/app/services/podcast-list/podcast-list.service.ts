import { Injectable } from '@angular/core';
import PodcastList from '../../list/PodcastList';
@Injectable({
  providedIn: 'root'
})
export class PodcastListService {
private podcasts: PodcastList[] = [];

  constructor() { }

  addPodcast(
    name: string,
	  host: string,
	  genre: string ,
	  episodeNumber: number,
  ): void {
    this.podcasts.push({
      name: name,
      host: host,
      genre: genre,
      episodeNumber: episodeNumber,
    });
  }

  getPodcasts(): PodcastList[]{
    return this.podcasts;
  }
}
