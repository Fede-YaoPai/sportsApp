import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/layout/header/header.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { HomeComponent } from './features/home/home.component';
import { AboutComponent } from './features/about/about.component';
import { ProductsComponent } from './features/products/products.component';
import { ApplyButtonComponent } from './shared/components/apply-button/apply-button.component';
import { LoginFormComponent } from './shared/components/login-form/login-form.component';
import { CancelButtonComponent } from './shared/components/cancel-button/cancel-button.component';
import { MainNavbarComponent } from './shared/components/main-navbar/main-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ProductsComponent,
    ApplyButtonComponent,
    LoginFormComponent,
    CancelButtonComponent,
    MainNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
