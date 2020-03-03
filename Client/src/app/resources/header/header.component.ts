import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserStoreService} from "../../core/services/user-store.service";
import {RequestStoreService} from "../../core/services/request-store.service";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../core/services/authentication.service";
import {Observable} from "rxjs";
import {User} from "../user/model/User";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user$: Observable<User>;

  constructor(private userStoreService: UserStoreService,
              private requestStoreService: RequestStoreService,
              private router: Router,
              private authService: AuthenticationService) {
  }

  ngOnInit() {
    this.user$ = this.userStoreService.getUser();
  }

  logout(): void {
    this.requestStoreService.removeRequestDetails();
    this.router.navigateByUrl("/login");
    this.userStoreService.logOut();
    this.authService.logout();
  }
}
