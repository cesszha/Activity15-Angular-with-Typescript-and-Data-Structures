import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import MovieList from '../list/Movie-List';
@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [NgForOf, FormsModule],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {
  movies: MovieList[] = [];

	name: string = '';
	director: string = '';
	year: number = 0;
	rating: number = 0;

	addMovie(): void {
		this.movies.push({
			
			name: this.name,
			director: this.director,
			year: this.year,
			rating: this.rating,
		});

	
		this.name = '';
		this.director = '';
		this.year = 0;
		this.rating = 0;
	}
}
