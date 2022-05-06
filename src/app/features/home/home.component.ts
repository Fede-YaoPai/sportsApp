import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public ctx = {
    productsCount: 6,
    cartProductsCount: 12
  };

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  public goToProducts(): void {
    this.router.navigateByUrl('products');
  }

}
