import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies/movies.component';
import { WatchlistComponent } from './my-watchlist/watchlist/watchlist.component';

const routes: Routes = [
  {
    path: "movies",
    component: MoviesComponent
  },
  {
    path: "watchlist",
    component: WatchlistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
