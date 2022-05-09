import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigate-button',
  template: `
    <button [ngClass]="buttonClass" (click)="navigate(navigateTo)">
      {{ buttonText }}
    </button>
  `,
  styleUrls: ['./navigate-button.component.scss']
})
export class NavigateButtonComponent implements OnInit {

  @Input() navigateTo: string = '';
  @Input() buttonText: string = '';
  @Input() buttonClass: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {}

  public navigate(path: string): void {
    this.router.navigateByUrl(path);
  }
}
