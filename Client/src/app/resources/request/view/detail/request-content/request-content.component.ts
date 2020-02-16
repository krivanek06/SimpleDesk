import { Component, OnInit, Input } from '@angular/core';
import { RequestDetails } from 'app/shared/models/RequestDetails';

@Component({
  selector: 'app-request-content',
  templateUrl: './request-content.component.html',
  styleUrls: ['./request-content.component.scss']
})
export class RequestContentComponent implements OnInit {
  @Input() requestDetail: RequestDetails;
  
  constructor() { }

  ngOnInit() {
  }

}
