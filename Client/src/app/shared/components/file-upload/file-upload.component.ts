import {Component, Input, Output} from '@angular/core';
import {EventEmitter} from '@angular/core';
import {CustomDocument} from "../../../features/requirement/model/Request";
import {swallErrorNotification} from "../../utils/swall-notification";

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {

  constructor() {
  }

  @Output() fileInserted: EventEmitter<CustomDocument[]> = new EventEmitter<CustomDocument[]>();
  @Input() uploaderHeight: number;
  @Input() requiredUpload: boolean;
  @Input() hideIt = false;

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
      swallErrorNotification(`Veľkosť vášho súboru je ${sizeMB}MB, maximálna povolená veľkosť je 20MB. `);
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
