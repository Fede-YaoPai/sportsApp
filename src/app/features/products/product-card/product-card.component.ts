import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/products.models';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product!: Product;

  @Output() onSeeProductDetail = new EventEmitter<Product>();
  @Output() onAddProductToCart = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
  }

  public seeProductDetail(p: Product): void {
    this.onSeeProductDetail.emit(p);
  }

  public addProductToCart(p: Product): void {
    this.onAddProductToCart.emit(p);
  }

}
