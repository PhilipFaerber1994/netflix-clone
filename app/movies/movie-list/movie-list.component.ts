import { Component, forwardRef, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/movies.service';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators} from '@angular/forms';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MovieListComponent),
    multi: true
  }]
})
export class MovieListComponent implements OnInit, ControlValueAccessor {

  itemsPerSlide = 5;
  singleSlideOffset = true;
  public movieList:any[] = [];
  showMovieOptions: boolean;

  public addMovie = new FormGroup({

    id: new FormControl(),
    name: new FormControl(),
    imageUrl: new FormControl(),
    length: new FormControl(),
    genre: new FormControl()

  });

  constructor( private readonly movieService: MoviesService) { 
    this.showMovieOptions = false;
  }
  writeValue(obj: any): void {
    // throw new Error('Method not implemented.');
  }
  registerOnChange(fn: any): void {
    // throw new Error('Method not implemented.');
  }
  registerOnTouched(fn: any): void {
    // throw new Error('Method not implemented.');
  }

  addToWatchlist(form: any){

    const newInputInWatchlist = {
      id: form.value.name,
      name: form.value.name,
      imageUrl: form.value.imageUrl,
      length: form.value.length,
      genre: form.value.genre
    }

    this.movieService.addToWatchlist(newInputInWatchlist).subscribe(data => {

    });

  }


  ngOnInit(): void {

    this.movieService.getMovie()
      .subscribe(data => 
        this.movieList = data);

    // this.movieService.getMovie()
    //   .subscribe(data => this.movieList = {
    //     name: data.
    //   });

  }

}
