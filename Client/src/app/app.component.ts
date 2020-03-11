import {Component, OnInit} from '@angular/core';
import {RequestService} from "./core/services/request.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'helpdesk';

  constructor( private requestService: RequestService) {
  }

  ngOnInit() {
    this.requestService.activateConnection();
  }


}
