import { AfterViewInit, Component, ComponentRef, ElementRef, HostListener, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavigateButton } from 'src/app/models/navigate-button.models';
import { NavigateButtonComponent } from 'src/app/shared/components/navigate-button/navigate-button.component';
import { passwordStrengthValidator } from 'src/app/shared/utilities/custom-validators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild('title') title!: ElementRef;
  @ViewChild(NavigateButtonComponent) button!: ComponentRef<NavigateButtonComponent>;
  @ViewChildren(NavigateButtonComponent) buttons!: QueryList<NavigateButtonComponent>;

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

  public form: FormGroup = this.fb.group({
    name: [null, {
      validators: [Validators.required, passwordStrengthValidator()]
    }]
  })

  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    let title: HTMLElement = this.title.nativeElement as HTMLElement;
    let buttons: NavigateButtonComponent[] = this.buttons.toArray();
  }

  public logForm(): void {
    console.log('form ->', this.form);
  }

  public goToProducts(): void {
    this.router.navigateByUrl('products');
  }

  public logFileInput(file: File): void {
    console.log('*** FILE INPUT ***');
  }

}
