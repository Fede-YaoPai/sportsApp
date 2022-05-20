import { KeyValue } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Product, ProductCategory } from 'src/app/models/products.models';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {

  public product!: Product;
  public productCategory = ProductCategory;
  public countries: string[] = ['Thailand', 'Italy', 'Germany'];

  constructor() {}

  ngOnInit(): void {
    this.initProduct();
  }

  private initProduct(): void {
    this.product = {
      id: '',
      name: '',
      category: ProductCategory.Boxe,
      price: 0,
      madeIn: '',
      madeOn: new Date(),
      onPromotion: false,
      description: ''
    };
  }

  public getCategories(categories: KeyValue<any, any>[]): KeyValue<number, string>[] {
    return categories
      .slice(0, categories.length / 2)
      .map((c) => {
        return {key: +c.key, value: c.value.toString()}
      });
  }

}
