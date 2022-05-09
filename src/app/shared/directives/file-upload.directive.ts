import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appFileUpload]'
})
export class FileUploadDirective {

  private nativeElement: HTMLInputElement;

  constructor(private el: ElementRef) {
    this.nativeElement = this.el.nativeElement
  }

  @HostListener('change', ['$event'])
  onFileInputChange(e: InputEvent) {
    let element: HTMLInputElement = e.target as HTMLInputElement;
    let inputFile: File | null | undefined = element.files?.item(0);

    if (inputFile) {
      // call server...
      console.log('calling server to upload file...');
    }
  }
}
