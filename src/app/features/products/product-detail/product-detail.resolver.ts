import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ProductsService } from 'src/app/core/services/products.service';
import { Product } from 'src/app/models/products.models';


@Injectable({
  providedIn: 'root'
})
export class ProductDetailResolver implements Resolve<Product> {

  constructor(private service: ProductsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product> {
    let productId: string = route.params['id'];

    return this.service.getById(productId);
  }
}
