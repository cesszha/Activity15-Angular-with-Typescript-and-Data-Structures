import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import PodcastList from '../list/PodcastList';
import { PodcastListService } from '../services/podcast-list/podcast-list.service';
@Component({
  selector: 'app-podcast-list',
  standalone: true,
  imports: [NgForOf, FormsModule],
  templateUrl: './podcast-list.component.html',
  styleUrl: './podcast-list.component.css'
})
export class PodcastListComponent {
  podcasts = [] as PodcastList [];
	constructor(private podcastService: PodcastListService){
		this.podcasts = this.podcastService.getPodcasts();
	}
	name: string = '';
	host: string = '';
	genre: string = '';
	episodeNumber: number = 0;

	addPodcast() {
		this.podcastService.addPodcast(
			this.name,
			this.host,
			this.genre,
			this.episodeNumber,
		);

		this.name = '';
		this.host = '';
		this.genre = '';
		this.episodeNumber = 0;
	}
}
