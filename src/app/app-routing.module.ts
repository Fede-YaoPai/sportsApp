import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ProductDetailComponent } from './features/products/product-detail/product-detail.component';
import { ProductsComponent } from './features/products/products.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'home',
    component: HomeComponent
  },
  {path: 'about', component: HomeComponent},
  {
    path: 'products',
    children: [
      {path: '', component: ProductsComponent},
      {path: ':id', component: ProductDetailComponent}
    ]
  },
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
