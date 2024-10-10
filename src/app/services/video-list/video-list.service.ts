import { Injectable } from '@angular/core';
import VideoList from '../../list/VideoList';
@Injectable({
  providedIn: 'root'
})
export class VideoListService {
private videos: VideoList[] = [];

  constructor() { }

  addVideos(

	  name: string,
	  description: string,
	  url: string,
	  rating: number,
	  category: string ,
  ): void{
    this.videos.push({
      name: name,
      description: description,
      url: url,
      rating: rating,
      category: category,

    });
  }
  getVideos(): VideoList[]{
    return this.videos;
  }
}
