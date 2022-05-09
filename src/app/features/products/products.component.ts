import { AfterViewInit, Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ProductsService } from 'src/app/core/services/products.service';
import { Product } from 'src/app/models/products.models';
import { ProgressBarComponent } from 'src/app/shared/components/progress-bar/progress-bar.component';
import { ProductCardComponent } from './product-card/product-card.component';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, AfterViewInit {

  public products$: Observable<Product[]> = this.service.products$;

  constructor(private service: ProductsService, private router: Router) { }

  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  public seeProductDetail(p: Product): void {
    this.router.navigate([`products/${p.id}`]);
  }

  public addProductToCart(p: Product): void {
    this.service.addToCart(p);
  }

}
