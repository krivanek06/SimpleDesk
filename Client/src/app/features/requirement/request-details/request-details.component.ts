import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-request-details',
  templateUrl: './request-details.component.html',
  styleUrls: ['./request-details.component.scss']
})
export class RequestDetailsComponent{

  sideBarBoolean = false;

  constructor() {
  }

  openSideBar() {
    this.sideBarBoolean = !this.sideBarBoolean;
  }

}
