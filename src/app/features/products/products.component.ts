import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductsService } from 'src/app/core/services/products.service';
import { Product } from 'src/app/models/products.models';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public products$: Observable<Product[]> = this.service.products$;

  constructor(private service: ProductsService, private router: Router) { }

  ngOnInit(): void {

  }

  public seeProductDetail(p: Product): void {
    this.router.navigate([`products/${p.id}`]);
  }

  public addProductToCart(p: Product): void {
    this.service.addToCart(p);
  }

}
