import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMovie } from './i-movie';
import { Watchlist } from './watchlist';
// import { Observable } from 'rxjs/Observable';
// import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private movieURL: string = "http://localhost:3000/movies";
  private watchlistUrl: string = "http://localhost:3000/watchlist";

  // private messageToWatchlist = new BehaviorSubject<string>("deffault message");
  // currentMessage = this.messageToWatchlist.asObservable();

  constructor(private readonly http: HttpClient) { }

  getMovie(): Observable<IMovie[]>{
    return this.http.get<IMovie[]>(this.movieURL);
  }

  addToWatchlist(addMovie: any): Observable<Watchlist[]>{
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');
    return this.http.post<Watchlist[]>(this.watchlistUrl, addMovie, {headers: httpHeaders});
  }

  showWatchlist(): Observable<Watchlist[]>{
    return this.http.get<Watchlist[]>(this.watchlistUrl);
  }

  // changeMessage(message: string){
  //   return this.messageToWatchlist.next(message);
  // }

}
