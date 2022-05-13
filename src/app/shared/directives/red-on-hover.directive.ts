import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRedOnHover]'
})
export class RedOnHoverDirective {

  @HostBinding('style.color') textColor: string;

  private nativeElement: HTMLElement;
  private defaultColor: string;

  constructor(private el: ElementRef, private rd: Renderer2) {
    this.nativeElement = this.el.nativeElement;
    this.defaultColor = this.nativeElement.style.color;
    this.textColor = this.defaultColor;
  }

  @HostListener('mouseover')
  onMouseOver() {
    this.textColor = 'red';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.textColor = this.defaultColor;
  }

}
