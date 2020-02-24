import { Component, OnInit, Input } from '@angular/core';
import { Request } from 'app/resources/request/model/interface/Request';

@Component({
  selector: 'app-request-content',
  templateUrl: './request-content.component.html',
  styleUrls: ['./request-content.component.scss']
})
export class RequestContentComponent implements OnInit {
  @Input() requestDetail: Request;

  constructor() { }

  ngOnInit() {
  }

}
