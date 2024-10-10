import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import MovieList from '../list/Movie-List';
import { MovieListService } from '../services/movie-list/movie-list.service';
@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [NgForOf, FormsModule],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {
  movies = [] as MovieList[];
	constructor(private movieService: MovieListService){
		this.movies = this.movieService.getMovies();
	}
	name: string = '';
	director: string = '';
	year: number = 0;
	rating: number = 0;

	addMovie(): void {
		this.movieService.addMovie(
			
			 this.name,
			 this.director,
			 this.year,
			 this.rating,
		);

	
		this.name = '';
		this.director = '';
		this.year = 0;
		this.rating = 0;
	}
}
