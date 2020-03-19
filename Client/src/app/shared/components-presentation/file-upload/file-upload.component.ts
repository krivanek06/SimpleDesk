import {Component, OnInit, Input, Output} from '@angular/core';
import {EventEmitter} from '@angular/core';
import {SwallNotificationService} from 'app/shared/services/swall-notification.service';
import {CustomDocument} from "../../../core/model/Request";

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {

  constructor(private swallNotification: SwallNotificationService) {
  }

  @Output() public fileInserted: EventEmitter<CustomDocument[]> = new EventEmitter<CustomDocument[]>();
  @Input() public uploaderHeight: number;
  @Input() public requiredUpload: boolean;
  @Input() public hideIt = false;

  files: File[] = [];

  uploadFile(fileList: FileList) {

    // collect uncollected
    for (let i = 0; i < fileList.length; i++) {
      if (!this.files.includes(fileList.item(i))) {
        this.files = [...this.files, fileList.item(i)];
      }
    }

    // if more than 20MB
    const sizeMB = Math.round(this.files.reduce((acc, item) => acc + item.size, 0) / 1000000);
    if (sizeMB > 20) {
      this.swallNotification.generateErrorNotification(`Veľkosť vášho súboru je ${sizeMB}MB, maximálna povolená veľkosť je 20MB. `);
      this.removeFiles();
      return;
    }

    // convert into custom format
    const customDocuments: CustomDocument[] = this.files.map(file => {
      return {
        name: file.name,
        lastModified: new Date().getTime(),
        file
      };
    });

    this.fileInserted.emit(customDocuments);
  }

  deleteAttachment(index) {
    this.files.splice(index, 1);
  }

  removeFiles() {
    this.files = [];
  }

}
