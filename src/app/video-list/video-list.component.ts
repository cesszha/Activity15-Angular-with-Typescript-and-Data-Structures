import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import VideoList from '../list/VideoList';
import { VideoListService } from '../services/video-list/video-list.service';
@Component({
  selector: 'app-video-list',
  standalone: true,
  imports: [NgForOf, FormsModule],
  templateUrl: './video-list.component.html',
  styleUrl: './video-list.component.css'
})
export class VideoListComponent {
	videoList = [] as VideoList [];
	constructor(private videoService:VideoListService ){
		this.videoList = this.videoService.getVideos();
	}

	name: string = '';
	description: string = '';
	url: string = '';
	rating: number = 0;
	category: string = '';

	addVideo() {
		this.videoService.addVideos(
			this.name,
			this.description,
			this.url,
			this.rating,
			this.category,

		);
		this.name = '';
		this.description = '';
		this.url = '';
		this.rating = 0;
		this.category = '';
	}
}
