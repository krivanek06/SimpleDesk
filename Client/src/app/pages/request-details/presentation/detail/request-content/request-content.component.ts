import {Component, OnInit, Input} from '@angular/core';
import {Request} from 'app/resources/request/model/interface/Request';
import {RequestType} from "../../../../../resources/request/model/enum/request.enum";

@Component({
  selector: 'app-request-content',
  templateUrl: './request-content.component.html',
  styleUrls: ['./request-content.component.scss']
})
export class RequestContentComponent implements OnInit {
  requestType: typeof RequestType = RequestType;

  @Input() requestDetail: Request;

  constructor() {
  }

  ngOnInit() {
  }

}
