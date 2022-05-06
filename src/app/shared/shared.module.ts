import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplyButtonComponent } from './components/apply-button/apply-button.component';
import { CancelButtonComponent } from './components/cancel-button/cancel-button.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { MainNavbarComponent } from './components/main-navbar/main-navbar.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { FirstUppercasePipe } from './pipes/first-uppercase.pipe';
import { TakeCharsFromPipe } from './pipes/take-chars-from.pipe';


const sharedComponents = [
  ApplyButtonComponent,
  CancelButtonComponent,
  LoginFormComponent,
  MainNavbarComponent,
  ProgressBarComponent
];

const sharedPipes = [
  FirstUppercasePipe,
  TakeCharsFromPipe
]

@NgModule({
  declarations: [...sharedComponents, sharedPipes],
  imports: [
    CommonModule
  ],
  exports: [...sharedComponents, sharedPipes]
})
export class SharedModule { }
