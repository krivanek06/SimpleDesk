import { Component, OnInit, ElementRef, ViewChild, HostListener, ViewChildren, QueryList } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'app/core/services/authentication.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  public hasPrivilegeAccess$: Observable<boolean>;

  public isAdmin$: Observable<boolean>;

  public isGhost$: Observable<boolean>;

  constructor( private authService: AuthenticationService) { }

  ngOnInit() { 
    this.hasPrivilegeAccess$ = this.authService.hasPrivilegeAccess();
    this.isAdmin$ = this.authService.isAdmin();
    this.isGhost$ = this.authService.isGhost();
  }

}
