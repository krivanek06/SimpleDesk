import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {DatePipe} from '@angular/common';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {MAT_DATE_FORMATS} from "saturn-datepicker";
import {FilterRequest} from "../../model/Request";
import {CustomDate} from "../../../../core/model/appState.model";
import {User, UserSimple} from "../../../../core/model/User";


export interface SatDatepickerRangeValue<D> {
  begin: D | null;
  end: D | null;
}

export const DD_MM_YYYY_Format = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'DD.MM.YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};


@Component({
  selector: 'app-request-filter',
  templateUrl: './request-filter.component.html',
  styleUrls: ['./request-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {provide: MAT_DATE_FORMATS, useValue: DD_MM_YYYY_Format},
  ]
})
export class RequestFilterComponent implements OnInit, OnDestroy {
  filterForm: FormGroup;
  selectedType: string; // used to display additional filters

  private destroy$: Subject<boolean> = new Subject<boolean>();

  @Input() allUsers: UserSimple[];
  @Input() filterRequests: FilterRequest;
  @Input() customDate: CustomDate;
  @Output() changedDate: EventEmitter<CustomDate> = new EventEmitter<CustomDate>();
  @Output() changedFormFilter: EventEmitter<FilterRequest> = new EventEmitter<FilterRequest>();

  constructor(private datepipe: DatePipe, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.filterForm = this.formBuilder.group({
      type: this.filterRequests.type,
      creator: this.filterRequests.creator,
      closed: this.filterRequests.closed,
      name: this.filterRequests.name,
      priority: this.filterRequests.priority,
    });

    this.filterForm.valueChanges.pipe(
      takeUntil(this.destroy$)
    ).subscribe(form => {
      this.changedFormFilter.emit(form as FilterRequest);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  saveDateAndFilter(event): void {
    const dateFrom = this.datepipe.transform(new Date(event.begin), 'dd.MM.yyyy');
    const dateTo = this.datepipe.transform(new Date(event.end), 'dd.MM.yyyy');

    this.changedDate.emit({dateFrom, dateTo});
  }

  deleteFilterOption(option: string): void {
    if (option === 'type') {
      this.filterForm.patchValue({type: ''});
    } else if (option === 'creator') {
      this.filterForm.patchValue({creator: ''});
    } else if (option === 'closed') {
      this.filterForm.patchValue({closed: ''});
    } else if (option === 'name') {
      this.filterForm.patchValue({name: ''});
    } else if (option === 'priority') {
      this.filterForm.patchValue({priority: ''});
    }

    this.changedFormFilter.emit(this.filterForm.value as FilterRequest);
  }

  get type() {
    return this.filterForm.get("type");
  }

  get creator() {
    return this.filterForm.get("creator");
  }

  get closed() {
    return this.filterForm.get("closed");
  }

  get name() {
    return this.filterForm.get("name");
  }

  get priority() {
    return this.filterForm.get("priority");
  }


}
