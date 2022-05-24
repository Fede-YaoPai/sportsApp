import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, Observable } from 'rxjs';
import { Product } from 'src/app/models/products.models';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products = new BehaviorSubject<Product[]>([]);
  public products$: Observable<Product[]> =
    this.products.asObservable();

  private cartProducts = new BehaviorSubject<Product[]>([]);
  public cartProducts$: Observable<Product[]> =
    this.cartProducts.asObservable();

  constructor(private http: HttpClient) {this.setAvailableProducts()}

  private setAvailableProducts(): void {
    this.getAll().subscribe((products: Product[]) =>
      this.products.next(products));
  }

  public getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(`api/products`).pipe(delay(1500));
  }

  public getById(id: string): Observable<Product> {
    return this.http.get<Product>(`api/products/${id}`).pipe(delay(1500));
  }

  public addToCart(product: Product): void {
    this.cartProducts.next([...this.cartProducts.getValue(), product]);
  }

  public removeFromCart(id: string): void {
    this.cartProducts.next(
      [
        ...this.cartProducts
          .getValue()
          .filter((p: Product) => p.id != id)
      ]
    );
  }

  public addNewProduct(newProduct: Product): Observable<Product> {
    return this.http
      .post<Product>('https://my-url/api/products', newProduct);
  }
}
