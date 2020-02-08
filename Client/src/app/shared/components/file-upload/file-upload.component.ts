import { Component, OnInit, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';

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
    // if more than 10MB
    let size : number = Math.round(files.item(0).size / 1000000) ;
    if(size > 10){
      Swal.fire({
        icon: 'error',
        text: `Veľkosť vášho súboru je ${size}MB, maximálna povolená veľkosť je 10MB. `,
      })
      return;
    }
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
