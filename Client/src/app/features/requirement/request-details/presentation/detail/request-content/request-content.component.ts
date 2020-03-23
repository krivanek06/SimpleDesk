import {Component, OnInit, Input, ChangeDetectionStrategy} from '@angular/core';
import {Request} from 'app/core/model/Request';
import {RequestType} from "../../../../../../core/enum/request.enum";

@Component({
  selector: 'app-request-content',
  templateUrl: './request-content.component.html',
  styleUrls: ['./request-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RequestContentComponent implements OnInit {
  requestType: typeof RequestType = RequestType;

  @Input() request: Request;

  constructor() {
  }

  ngOnInit() {
  }

}
