import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Request} from "../../../../../model/Request";
import {RequestPriority, RequestType} from "../../../../../model/request.enum";

@Component({
  selector: 'app-request-information',
  templateUrl: './request-information.component.html',
  styleUrls: ['./request-information.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RequestInformationComponent implements OnInit {
  @Input() request: Request;
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
    const open = new Date(this.request.timestampCreation);
    let result = 0;
    const oneDay = 1000 * 60 * 60 * 24; // Get 1 day in milliseconds

    if (!this.request.timestampClosed) {
      const today = new Date();
      result = today.getTime() - open.getTime();
    } else {
      const closed = new Date(this.request.timestampClosed);
      result = closed.getTime() - open.getTime();
    }
    return Math.round(result / oneDay);
  }
}
