import { Component } from '@angular/core';

@Component({
  selector: 'app-file-uploader',
  template: `
    <input type="file" appFileUpload appHoverPopup accept="pdf">
  `,
  styleUrls: ['./file-uploader.component.scss']
})
export class FileUploaderComponent { }
