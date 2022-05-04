import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplyButtonComponent } from './components/apply-button/apply-button.component';
import { CancelButtonComponent } from './components/cancel-button/cancel-button.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { MainNavbarComponent } from './components/main-navbar/main-navbar.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';

const sharedComponents = [
  ApplyButtonComponent,
  CancelButtonComponent,
  LoginFormComponent,
  MainNavbarComponent,
  ProgressBarComponent
];

@NgModule({
  declarations: [...sharedComponents],
  imports: [
    CommonModule
  ],
  exports: [...sharedComponents]
})
export class SharedModule { }
