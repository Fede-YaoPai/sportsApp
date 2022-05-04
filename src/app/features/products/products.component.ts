import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductsService } from 'src/app/core/services/products.service';
import { Product, ProductCategory } from 'src/app/models/products.models';
import { ProductCardComponent } from './product-card/product-card.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public products$: Observable<Product[]> = this.service.products$;

  public product: Product = {
    id: '001',
    name: 'Boxing Gloves',
    madeIn: 'Thailand',
    madeOn: new Date('2021-04-02'),
    category: ProductCategory.Boxe,
    onPromotion: false,
    description: 'A great pair of gloves.',
    price: 97
  };

  public productVisible: boolean = true;

  public productCategory = ProductCategory;

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
