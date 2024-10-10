import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import TvShowList from '../list/TVShowList';
import { TvShowListService } from '../services/tv-show-list/tv-show-list.service';

@Component({
  selector: 'app-tv-show-list',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './tv-show-list.component.html',
  styleUrl: './tv-show-list.component.css'
})
export class TvShowListComponent {
  tvShowList = [] as TvShowList[];
constructor (private tvShowService: TvShowListService){
  this.tvShowList = this.tvShowService.getTvShows();
}
	channel: string = '';
	description: string = '';
	url: string = '';
	rating: number = 0;
	category: string = '';

  addTvShow() {
		this.tvShowService.addTvShow(
      this.channel,
      this.description,
      this.url,
      this.rating,
      this.category,
      
    );
		this.channel = '';
		this.description = '';
		this.url = '';
		this.rating = 0;
		this.category = '';
	}
}
