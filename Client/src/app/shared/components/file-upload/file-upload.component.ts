import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {
  
  constructor(){}

   @Input() public uploaderHeight: number;
   @Input() public requiredUpload: boolean;

  public files: File[]  = [];

  private uploadFile(files: FileList ) {
    this.files.push(files.item(0));
  }
  private deleteAttachment(index) {
    this.files.splice(index, 1)
  }
  public isEmpty(): boolean{
    return this.files.length === 0;
  }

}
