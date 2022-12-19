import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieRes } from './movie/MovireRes';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiKey = "90eb3126e63be5a94312f2ed0feef42b"

  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get("https://fakestoreapi.com/products");
  }
  
  getCategories(){
    return this.http.get("https://fakestoreapi.com/products/categories");
  }


  getCarts(){
    return this.http.get("https://fakestoreapi.com/carts")
  }

  getMovies():Observable<MovieRes>{
    return this.http.get<MovieRes>("https://api.themoviedb.org/3/movie/now_playing?api_key=90eb3126e63be5a94312f2ed0feef42b&language=ru&page=1")
  }

  getToken(){
    return this.http.get("https://api.themoviedb.org/3/authentication/token/new?api_key=90eb3126e63be5a94312f2ed0feef42b")
  }


  token ="65ddbfc818e1bff99b765d95634de0dcdd9d100d";

  getID(){
    return this.http.post("https://api.themoviedb.org/3/authentication/session/new?api_key=90eb3126e63be5a94312f2ed0feef42b",
    {
      "request_token": "65ddbfc818e1bff99b765d95634de0dcdd9d100d"
    }
    )
  }

  session_id = "ba33c8147dbaae30907a8191a80503203f50ebdb"

  getWatchList(){
    return this.http.get("https://api.themoviedb.org/3/account/1/watchlist/movies?api_key=90eb3126e63be5a94312f2ed0feef42b&session_id=ba33c8147dbaae30907a8191a80503203f50ebdb&language=en-US&sort_by=created_at.asc&page=1")
  }

  addToWatchList(){
    return this.http.post("https://api.themoviedb.org/3/account/1/watchlist?api_key=90eb3126e63be5a94312f2ed0feef42b&session_id=ba33c8147dbaae30907a8191a80503203f50ebdb",
    {
      "media_type": "movie",
      "media_id": 724495,
      "watchlist": true
    }
    )
  }
}
