import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {UserStoreService} from 'app/core/services/user-store.service';
import {Store} from "@ngrx/store";
import {RequestState} from "../../../core/model/appState.model";
import {getRequestById} from "../store/request.reducer";
import {Request} from "../../../core/model/Request";

@Component({
  selector: 'app-request-details',
  templateUrl: './request-details.component.html',
  styleUrls: ['./request-details.component.scss']
})
export class RequestDetailsComponent implements OnInit {

  sideBarBoolean = false;
  isGhost$: Observable<boolean>;
  isAdmin$: Observable<boolean>;

  request$: Observable<Request>;

  constructor(public userStoreService: UserStoreService,
              private store: Store<RequestState>) {

    this.isGhost$ = this.userStoreService.isGhost();
    this.isAdmin$ = this.userStoreService.isAdmin();
  }

  openSideBar() {
    this.sideBarBoolean = !this.sideBarBoolean;
  }

  ngOnInit() {
    this.store.subscribe(x => console.log(x));
    this.request$ = this.store.select(getRequestById);
    this.request$.subscribe(x => console.log(x));
  }
}
