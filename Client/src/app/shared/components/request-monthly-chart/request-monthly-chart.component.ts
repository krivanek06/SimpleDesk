import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {RequestStatistics} from "../../../features/requirement/model/Request";

@Component({
  selector: 'app-request-monthly-chart',
  templateUrl: './request-monthly-chart.component.html',
  styleUrls: ['./request-monthly-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RequestMonthlyChartComponent implements OnInit {
  @Input() requestStatistics: RequestStatistics;
  @Input() height: number;

  chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  constructor() {
  }

  ngOnInit(): void {
  }


}
