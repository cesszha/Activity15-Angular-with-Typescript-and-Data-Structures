import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import TvShowList from '../list/TVShowList';

@Component({
  selector: 'app-tv-show-list',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './tv-show-list.component.html',
  styleUrl: './tv-show-list.component.css'
})
export class TvShowListComponent {
  tvShowList: TvShowList[] = [];
	channel: string = '';
	description: string = '';
	url: string = '';
	rating: number = 0;
	category: string = '';

  addTvShow() {
		this.tvShowList.push({
      channel: this.channel,
      description: this.description,
      url: this.url,
      rating: this.rating,
      category: this.category,
      title: undefined
    });
		this.channel = '';
		this.description = '';
		this.url = '';
		this.rating = 0;
		this.category = '';
	}
}
