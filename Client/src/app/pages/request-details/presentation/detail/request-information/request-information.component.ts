import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Request} from "../../../../../core/model/Request";
import {RequestPriority, RequestType} from "../../../../../core/enum/request.enum";

@Component({
  selector: 'app-request-information',
  templateUrl: './request-information.component.html',
  styleUrls: ['./request-information.component.scss']
})
export class RequestInformationComponent implements OnInit {
  @Input() requestDetails: Request;
  @Input() showAssignedOnMe: boolean;

  @Output() assignOnMeEmitter: EventEmitter<any> = new EventEmitter<any>();
  @Output() downloadFileEmitter: EventEmitter<string> = new EventEmitter<string>();

  openDays: number;
  requestType: typeof RequestType = RequestType;
  requestPriority: typeof RequestPriority = RequestPriority;

  constructor() {
  }

  ngOnInit() {
    this.openDays = this.calculateOpenDays();
  }

  downloadFile(fileName: string) {
    this.downloadFileEmitter.emit(fileName);
  }

  assignOnMe() {
    this.assignOnMeEmitter.emit();
  }

  calculateOpenDays(): number {
    const open = new Date(this.requestDetails.timestampCreation);
    let result = 0;
    const oneDay = 1000 * 60 * 60 * 24; // Get 1 day in milliseconds

    if (this.requestDetails.timestampClosed === null) {
      const today = new Date();
      result = today.getTime() - open.getTime();
    } else {
      const closed = new Date(this.requestDetails.timestampClosed);
      result = closed.getTime() - open.getTime();
    }
    return Math.round(result / oneDay);
  }
}
