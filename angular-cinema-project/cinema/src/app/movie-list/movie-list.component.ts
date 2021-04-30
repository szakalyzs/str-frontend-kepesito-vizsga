import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../model/movie';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  list$: Observable<Movie[]> = this.httpService.getMovieList();

  movies: Movie[] = [];

  constructor(
    private httpService: HttpService
  ) { }

  ngOnInit(): void {
  }

  getMovies(): void {

  }

  deleteMovie(movie: Movie): void {
    this.httpService.deleteMovie(movie.id).subscribe(
      p => this.list$ = this.httpService.getMovieList()
    );
  }

}
