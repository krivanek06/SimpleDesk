import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserStoreService} from "../../../core/services/user-store.service";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../../core/services/authentication.service";
import {Observable} from "rxjs";
import {User} from "../../../core/model/User";
import {RequestService} from "../../../features/requirement/services/request.service";
import {Store} from "@ngrx/store";
import {AppState, RequestState} from "../../../core/model/appState.model";
import {resetRequests} from "../../../features/requirement/store/request.action";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user$: Observable<User>;

  constructor(private userStoreService: UserStoreService,
              private requestService: RequestService,
              private router: Router,
              private authService: AuthenticationService,
              private store: Store<RequestState>) {
  }

  ngOnInit() {
    this.user$ = this.userStoreService.getUser();
  }

  logout(): void {
    this.router.navigateByUrl("/login");
    this.userStoreService.logOut();
    this.requestService.disconnectWebsockets();
    this.authService.logout();
    this.store.dispatch(resetRequests());
  }
}
