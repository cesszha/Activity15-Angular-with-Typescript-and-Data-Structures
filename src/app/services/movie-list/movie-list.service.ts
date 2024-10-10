import { Injectable } from '@angular/core';
import MovieList from '../../list/Movie-List';
@Injectable({
  providedIn: 'root'
})
export class MovieListService {
  private movies: MovieList[] = [];

  constructor() { }
 
  addMovie(
    name: string,
	  director: string,
	  year: number, 
	  rating: number,
  ): void {
    this.movies.push({
      name: name,
      director: director,
      year: year,
      rating: rating,
    });
  }

  getMovies(): MovieList[]{
    return this.movies;
  }


}
