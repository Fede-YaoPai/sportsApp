import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductCardComponent } from './products/product-card/product-card.component';
import { SharedModule } from '../shared/shared.module';
import { FormComponent } from './form/form.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ProductsComponent,
    ProductDetailComponent,
    ProductCardComponent,
    ProductCardComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class FeaturesModule { }
