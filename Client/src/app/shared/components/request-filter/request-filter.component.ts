import {Component, OnInit, Output, EventEmitter, OnDestroy} from '@angular/core';
import {DatePipe} from '@angular/common';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UserStoreService} from 'app/core/services/user-store.service';
import {Observable, Subject} from 'rxjs';
import {UserSimpleDTO} from 'app/resources/user/model/User';
import {takeUntil} from 'rxjs/operators';
import {UserHttpService} from 'app/api/user-http.service';
import {MAT_DATE_FORMATS} from "saturn-datepicker";


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
  providers: [
    {provide: MAT_DATE_FORMATS, useValue: DD_MM_YYYY_Format},
  ]
})
export class RequestFilterComponent implements OnInit, OnDestroy {
  dateFrom: string;
  dateTo: string;
  filterForm: FormGroup;
  selectedType: string; // used to display additional filters
  isMoreThanNormalUser$: Observable<boolean>;
  allUsers$: Observable<UserSimpleDTO[]>;
  private destroy$: Subject<boolean> = new Subject<boolean>();

  @Output() changedDate: EventEmitter<any> = new EventEmitter<any>();
  @Output() changedFormFilter: EventEmitter<any> = new EventEmitter<any>();

  constructor(private datepipe: DatePipe,
              private formBuilder: FormBuilder,
              private userHttp: UserHttpService,
              private userStoreService: UserStoreService) {
  }

  ngOnInit() {
    this.initDateFilter();
    this.isMoreThanNormalUser$ = this.userStoreService.isMoreThanNormalUser();
    this.allUsers$ = this.userHttp.getAllActiveUsers();

    this.filterForm = this.formBuilder.group({
      type: '',
      creator: '',
      closed: '',
      name: '',
      priority: '',
    });

    this.filterForm.valueChanges.pipe(
      takeUntil(this.destroy$)
    ).subscribe(form => {
      this.changedFormFilter.emit(form);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  saveDateAndFilter(event): void {
    this.dateFrom = this.datepipe.transform(new Date(event.begin), 'dd.MM.yyyy');
    this.dateTo = this.datepipe.transform(new Date(event.end), 'dd.MM.yyyy');

    this.changedDate.emit();
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

    this.changedFormFilter.emit(this.filterForm.value);
  }


  private initDateFilter(): void {
    const today = new Date();
    this.dateTo = this.datepipe.transform(today, 'dd.MM.yyyy');

    today.setDate(today.getDate() - 30);
    this.dateFrom = this.datepipe.transform(today, 'dd.MM.yyyy');
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
