import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddMovieToWatchlistComponent } from './add-movie-to-watchlist/add-movie-to-watchlist.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowWatchlistComponent } from './show-watchlist/show-watchlist.component';
// import { FormControl, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';




@NgModule({
  declarations: [
    AddMovieToWatchlistComponent,
    WatchlistComponent,
    ShowWatchlistComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class MyWatchlistModule { }
