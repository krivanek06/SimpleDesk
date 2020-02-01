import { Component, OnInit, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {
  
  constructor(){}
   @Output() public fileInserted: EventEmitter<File> = new EventEmitter<File>();
   @Input() public uploaderHeight: number;
   @Input() public requiredUpload: boolean;
   @Input() public hideIt: boolean = false;

  public files: File[]  = [];

  uploadFile(files: FileList ) {
    this.files.push(files.item(0));
    this.fileInserted.emit(files.item(0));
  }
  deleteAttachment(index) {
    this.files.splice(index, 1)
  }
  public isEmpty(): boolean{
    return this.files.length === 0;
  }

}
