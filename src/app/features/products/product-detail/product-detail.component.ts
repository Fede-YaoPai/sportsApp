import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { map, Observable } from 'rxjs';
import { ProductsService } from 'src/app/core/services/products.service';
import { Product, ProductCategory } from 'src/app/models/products.models';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  public product$!: Observable<Product | undefined>;

  constructor(private route: ActivatedRoute, public service: ProductsService) { }

  ngOnInit(): void {
    this.setProduct$();
  }

  public setProduct$(): void {
    this.product$ = this.service.products$.pipe(
      map((products: Product[]) =>
        products.find((p: Product) => p.id === this.getProductId())
      )
    );
  }

  public getProductId(): string {
    const params: Params = this.route.snapshot.params;
    const productId: string = params['id'];

    return productId;
  }

  public getProductCategory(p: Product): string {
    let c: string = '';

    switch (p.category) {
      case ProductCategory.Boxe: c = 'Boxing'; break;
      case ProductCategory.Kickboxing: c = 'Kickboxing'; break;
      case ProductCategory.MMA: c = 'MMA'
    };

    return c;
  }

}
