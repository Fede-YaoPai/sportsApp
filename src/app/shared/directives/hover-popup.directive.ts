import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverPopup]'
})
export class HoverPopupDirective {

  private hostElement!: HTMLInputElement;
  private parentElement!: HTMLElement;
  private popup!: HTMLElement;
  private popupVisible: boolean = false;

  constructor(private renderer: Renderer2, private el: ElementRef) {
    this.initElements();
  }

  @HostListener('mouseover', ['$event'])
  onInputMouseOver(e: MouseEvent) {
    this.popup.innerHTML = `File type: <strong>${this.hostElement.getAttribute('accept')}</strong>`;

    if (!this.popupVisible) {
      this.renderer.appendChild(this.parentElement, this.popup);
      this.setPopupPosition();
      this.popupVisible = true;
    }
  }

  @HostListener('mouseleave', ['$event'])
  onInputMouseLeave(e: MouseEvent) {
    if (this.popupVisible) {
      this.renderer.removeChild(this.parentElement, this.popup);
      this.popupVisible = false;
    }
  }

  private initElements(): void {
    this.hostElement = this.el.nativeElement;

    this.parentElement = this.hostElement.parentElement!;
    this.renderer.setStyle(this.parentElement, 'position', 'relative');

    this.popup = this.renderer.createElement('small');
    this.renderer.setStyle(this.popup, 'position', 'absolute');
    this.renderer.setStyle(this.popup, 'border', '1px solid black');
    this.renderer.setStyle(this.popup, 'border-radius', '2px');
    this.renderer.setStyle(this.popup, 'box-shadow', '2px 3px 9px rgba(0, 0, 0, 0.3)');
    this.renderer.setStyle(this.popup, 'padding', '6px 18px');
    this.renderer.setStyle(this.popup, 'background', 'white');
    this.renderer.setStyle(this.popup, 'white-space', 'nowrap');
    this.renderer.setStyle(this.popup, 'z-index', '99');
    this.renderer.setStyle(this.popup, 'max-width', '300px');
  }

  private setPopupPosition(): void {
    let popupHeight: number = this.popup.offsetHeight;
    let hostWidth: number = this.hostElement.offsetWidth;

    this.renderer.setStyle(this.popup, 'top', `${(-(popupHeight + 12))}px`);
    this.renderer.setStyle(this.popup, 'left', `${((hostWidth - 72))}px`);
  }

}
