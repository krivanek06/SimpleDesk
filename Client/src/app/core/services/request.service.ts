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

}
