import { AfterViewInit, Component, ComponentRef, ElementRef, HostListener, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { NavigateButton } from 'src/app/models/navigate-button.models';
import { NavigateButtonComponent } from 'src/app/shared/components/navigate-button/navigate-button.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild('title') title!: ElementRef;
  //@ViewChild('fileInput') fileInput!: ElementRef;
  @ViewChild(NavigateButtonComponent) button!: ComponentRef<NavigateButtonComponent>;
  @ViewChildren(NavigateButtonComponent) buttons!: QueryList<NavigateButtonComponent>;

  // @HostListener('window:click', ['$event'])
  // test(e: MouseEvent) {
  //   console.log('Window clicked! Event: ', e);
  // }

  // @HostListener('change', ['$event.target.files'])
  // onFileInput(files: FileList) {
  //   const file: File | null = files.item(0);

  //   if (file) this.logFileInput(file);
  // }

  public ctx = {
    productsCount: 6,
    cartProductsCount: 12
  };

  public navigateButtons: NavigateButton[] = [
    {
      navigateTo: 'products',
      buttonText: 'See our products',
      buttonClass: 'button is-primary'
    },
    {
      navigateTo: 'about',
      buttonText: 'About our Company',
      buttonClass: 'button is-success'
    },
    {
      navigateTo: 'contact',
      buttonText: 'Contact us',
      buttonClass: 'button is-info'
    },
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    let title: HTMLElement = this.title.nativeElement as HTMLElement;
    let buttons: NavigateButtonComponent[] = this.buttons.toArray();
  }

  public goToProducts(): void {
    this.router.navigateByUrl('products');
  }

  public logFileInput(file: File): void {
    console.log('*** FILE INPUT ***');
  }

}
