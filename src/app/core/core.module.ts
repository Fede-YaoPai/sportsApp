import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

const layoutComponents = [
  HeaderComponent,
  FooterComponent
];

@NgModule({
  declarations: [...layoutComponents],
  imports: [
    CommonModule
  ],
  exports: [...layoutComponents]
})
export class CoreModule { }
