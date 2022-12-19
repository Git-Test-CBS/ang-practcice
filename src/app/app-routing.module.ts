import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  {path:"",component:ShopComponent, pathMatch:"full"},
  {path:"shop",component:ShopComponent},
  {path:"movie",component:MovieComponent}, 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
