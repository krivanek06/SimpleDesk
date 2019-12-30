import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationService } from 'app/core/services/authentication.service';

@Component({
  selector: 'app-privileges',
  templateUrl: './privileges.component.html',
  styleUrls: ['./privileges.component.scss']
})
export class PrivilegesComponent implements OnInit {
  @Input() public name;

  public MODULE_TYPES_TO_USE: string[] = [];
  public FINANCE_TYPE_TO_SUBMIT: string[] = [];
  public REQUEST_TYPE_TO_SOLVE: string[] = [];
  public TICKET_SOFTWARE_PRIVILEGES: string[] = [];
  public TICKET_HARDWARE_PRIVILEGES: string[] = [];
  public TICKET_SERVER_PRIVILEGES: string[]= [] ;
  public TICKET_USER_PRIVILEGES: boolean = false;
  public TICKET_OTHER_PRIVILEGES: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
