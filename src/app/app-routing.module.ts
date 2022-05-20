import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { DeactivateFormGuard } from './core/guards/deactivate-form.guard';
import { AboutComponent } from './features/about/about.component';
import { FormComponent } from './features/form/form.component';
import { FormResolver } from './features/form/form.resolver';
import { HomeComponent } from './features/home/home.component';
import { ProductDetailComponent } from './features/products/product-detail/product-detail.component';
import { ProductsComponent } from './features/products/products.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'form',
    component: FormComponent,
    canDeactivate: [DeactivateFormGuard]
  },
  {path: 'about', component: AboutComponent},
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
