import {Component, OnInit, Input, Output} from '@angular/core';
import {EventEmitter} from '@angular/core';
import {SwallNotificationService} from 'app/shared/services/swall-notification.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {

  constructor(private swallNotification: SwallNotificationService) {
  }

  @Output() public fileInserted: EventEmitter<FileList> = new EventEmitter<FileList>();
  @Input() public uploaderHeight: number;
  @Input() public requiredUpload: boolean;
  @Input() public hideIt = false;

  files: File[] = [];

  uploadFile(files: FileList) {
    // if more than 20MB
    let fileSize = 0;
    for (let i = 0; i < files.length; i++) {
      fileSize += files.item(i).size;
    }

    const sizeMB: number = Math.round(fileSize / 1000000);
    if (sizeMB > 20) {
      this.swallNotification.generateErrorNotification(`Veľkosť vášho súboru je ${sizeMB}MB, maximálna povolená veľkosť je 20MB. `);
      return;
    }
    for (let i = 0; i < files.length; i++) {
      this.files.push(files.item(i));
    }

    this.fileInserted.emit(files);
  }

  deleteAttachment(index) {
    this.files.splice(index, 1);
  }

  removeFiles() {
    this.files = [];
  }

}
