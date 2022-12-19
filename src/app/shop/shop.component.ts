import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  products:any;

  constructor(private dataService:DataService) { }

  ngOnInit(): void {

    this.dataService.getProducts().subscribe(res=>{console.log(res); this.products = res});

    // this.dataService.getCategories().subscribe(res=>console.log(res));

    // this.dataService.getCarts().subscribe(res=>console.log(res));
  }

}
