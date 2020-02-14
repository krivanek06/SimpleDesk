import {Injectable} from '@angular/core';
import {RequestStoreService} from './request-store.service';
import {Observable, of} from 'rxjs';
import {UserStoreService} from './user-store.service';
import {shareReplay, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private requestStore: RequestStoreService,
              private userStore: UserStoreService) {
  }

  public addFilesToRequest(fileList: FileList) {
    for (let i = 0; i < fileList.length; i++) {
      const file = fileList.item(i);
      this.requestStore.requestDetails.documents.push({
        name: file.name,
        lastModified: new Date().getTime()
      });
    }
  }

}
