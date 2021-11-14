import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies/movies.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { MainSuggestedFilmComponent } from './main-suggested-film/main-suggested-film.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    MoviesComponent,
    MainSuggestedFilmComponent,
    MovieListComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    CarouselModule.forRoot(),
    ReactiveFormsModule
    
  ],
  exports: [
    MainSuggestedFilmComponent
  ]
})
export class MoviesModule { }
