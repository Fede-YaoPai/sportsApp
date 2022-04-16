import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FeaturesModule { }
