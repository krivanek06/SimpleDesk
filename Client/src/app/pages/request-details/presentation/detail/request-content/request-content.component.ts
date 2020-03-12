import {Component, OnInit, Input} from '@angular/core';
import {Request} from 'app/core/model/Request';
import {RequestType} from "../../../../../core/enum/request.enum";

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
