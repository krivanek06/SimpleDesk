import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';


export interface SatDatepickerRangeValue<D> {
  begin: D | null;
  end: D | null;
}


@Component({
  selector: 'app-request-filter',
  templateUrl: './request-filter.component.html',
  styleUrls: ['./request-filter.component.scss']
})
export class RequestFilterComponent implements OnInit {
  public dateFrom: string;
  public dateTo: string;

  @Output() changedDate: EventEmitter<any> = new EventEmitter<any>();

  constructor(private datepipe: DatePipe) { }

  ngOnInit() {
    this.initDateFilter();
  }

  public saveDateAndFilter(event): void {
    this.dateFrom = this.datepipe.transform(new Date(event.begin), 'dd.MM.yyyy');
    this.dateTo = this.datepipe.transform(new Date(event.end), 'dd.MM.yyyy');

    this.changedDate.emit();
  }

  public initDateFilter(): void {
    let today = new Date()
    this.dateTo = this.datepipe.transform(today, 'dd.MM.yyyy');

    today.setDate(today.getDate() - 30);
    this.dateFrom = this.datepipe.transform(today, 'dd.MM.yyyy');
  }

}
