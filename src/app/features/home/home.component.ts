import { AfterViewInit, Component, ComponentRef, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
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

  public form!: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  ngAfterViewInit(): void {
    let title: HTMLElement = this.title.nativeElement as HTMLElement;
    let buttons: NavigateButtonComponent[] = this.buttons.toArray();
  }

  private initForm(): void {
    this.form = this.fb.group({
      name: [null, {
        validators: [Validators.required, passwordStrengthValidator()]
      }]
    })
  }

  public logForm(): void {
    console.log('form control ->', this.form.controls['name']);
  }

  public goToProducts(): void {
    this.router.navigateByUrl('products');
  }

  public logFileInput(file: File): void {
    console.log('*** FILE INPUT ***');
  }

}
