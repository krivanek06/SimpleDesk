import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @Input() hasFinanceModuleAccess: boolean;
  @Input() hasTicketModuleAccess: boolean;
  @Input() hasReportModuleAccess: boolean;
  @Input() hasPrivilegeAccess: boolean;
  @Input() isAdmin: boolean;
  @Input() isGhost: boolean;

  constructor() {
  }

  ngOnInit() {

  }

}
