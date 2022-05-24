import { KeyValue } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from 'src/app/core/services/api.service';
import { ProductsService } from 'src/app/core/services/products.service';
import { Product, ProductCategory } from 'src/app/models/products.models';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit, AfterViewInit {

  @ViewChild('productForm') productForm!: NgForm;

  public product!: Product;
  public productCategory = ProductCategory;
  public countries: string[] = ['Thailand', 'Italy', 'Germany'];

  constructor(private service: ProductsService) {}

  ngOnInit(): void {
    this.initProduct();
  }

  ngAfterViewInit(): void {
    console.log('NgForm instance ->', this.productForm);

    this.productForm.form.valueChanges.subscribe(f => {
      // console.log('NgForm instance ->', this.productForm);
      // console.log('form value: ', f);
      // console.log('name control: ', this.productForm.controls['name'].value);
    })
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

  public onSubmit(newProduct: Product): void {
    if (this.productForm.valid) {
      this.service.addNewProduct(newProduct)
      .subscribe((addedProduct: Product) => {
        console.log('added product: ', addedProduct);
      });
    }
  }

}
