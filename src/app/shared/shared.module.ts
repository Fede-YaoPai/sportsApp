import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplyButtonComponent } from './components/apply-button/apply-button.component';
import { CancelButtonComponent } from './components/cancel-button/cancel-button.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { MainNavbarComponent } from './components/main-navbar/main-navbar.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { FirstUppercasePipe } from './pipes/first-uppercase.pipe';
import { TakeCharsFromPipe } from './pipes/take-chars-from.pipe';
import { NavigateButtonComponent } from './components/navigate-button/navigate-button.component';
import { FileUploaderComponent } from './components/file-uploader/file-uploader.component';
import { FileUploadDirective } from './directives/file-upload.directive';
import { HoverPopupDirective } from './directives/hover-popup.directive';
import { RedOnHoverDirective } from './directives/red-on-hover.directive';



const sharedComponents = [
  ApplyButtonComponent,
  CancelButtonComponent,
  LoginFormComponent,
  MainNavbarComponent,
  ProgressBarComponent,
  NavigateButtonComponent,
  FileUploaderComponent
];

const sharedPipes = [
  FirstUppercasePipe,
  TakeCharsFromPipe
];

const sharedDirectives = [
  FileUploadDirective,
  HoverPopupDirective,
  RedOnHoverDirective
];

@NgModule({
  declarations: [...sharedComponents, sharedPipes, sharedDirectives],
  imports: [
    CommonModule
  ],
  exports: [...sharedComponents, sharedPipes,sharedDirectives]
})
export class SharedModule { }
