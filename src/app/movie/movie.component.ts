import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { MovieInfo } from './MovieInfo';
import { MovieRes } from './MovireRes';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movies:MovieInfo[] | undefined;
  res:MovieRes | undefined;

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.getMovies().subscribe(res=>{console.log(res); this.movies = res.results})
    this.dataService.addToWatchList().subscribe(res=>console.log(res))
  }

  getToken(){
    this.dataService.getToken().subscribe(res=>console.log(res))
  }

  getID(){
    this.dataService.getID().subscribe(res=>console.log(res))
  }

  showWatchList(){
    this.dataService.getWatchList().subscribe(res=>console.log(res))
  }

  

  

}
