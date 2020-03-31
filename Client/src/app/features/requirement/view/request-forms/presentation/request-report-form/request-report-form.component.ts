import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {accessValidator} from 'app/features/requirement/view/request-forms/validators/reportAccessValidator';
import {MAT_DATE_FORMATS} from "saturn-datepicker";
import {ReportForm} from "../../../../model/Request";

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
  selector: 'app-request-report-form',
  templateUrl: './request-report-form.component.html',
  styleUrls: ['./request-report-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {provide: MAT_DATE_FORMATS, useValue: DD_MM_YYYY_Format},
  ]
})
export class RequestReportFormComponent implements OnInit {
  reportForm: FormGroup;
  accessByPeopleArray: any[] = []; // people who can access report
  accessByMethodArray: any[] = [];

  @Output() formEmitter: EventEmitter<ReportForm> = new EventEmitter<ReportForm>();
  @ViewChild('reportFormViewChild', {static: true}) reportFormViewChild;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.reportForm = this.formBuilder.group({
      name: ['', [
        Validators.required,
        Validators.minLength(5),
      ]],
      requestPriority: ['', [
        Validators.required,
      ]],
      owner: ['', [
        Validators.required,
      ]],
      reportType: ['', [
        Validators.required,
      ]],
      reportRefresh: ['', [
        Validators.required,
      ]],
      purpose: ['', [
        Validators.required,
      ]],
      criteria: ['', [
        Validators.required,
      ]],
      visibleData: ['', [
        Validators.required,
      ]],
      otherInformation: '',
      accessMethods: ['', [
        accessValidator(this.accessByMethodArray)
      ]],
      accessByPeople: ['', [accessValidator(this.accessByPeopleArray)]],
      deadline: ['', [
        Validators.required,
      ]],
    });
  }


  submit(): void {
    if (this.reportForm.invalid) {
      return;
    }
    this.reportForm.patchValue({accessByPeople: this.accessByPeopleArray.join(",")});
    this.reportForm.patchValue({accessMethods: this.accessByMethodArray.join(",")});

    const reportForm: ReportForm = {
      name: this.reportForm.get("name").value,
      owner: this.reportForm.get("owner").value,
      requestPriority: this.reportForm.get("requestPriority").value,
      reportType: this.reportForm.get("reportType").value,
      reportRefresh: this.reportForm.get("reportRefresh").value,
      purpose: this.reportForm.get("purpose").value,
      criteria: this.reportForm.get("criteria").value,
      visibleData: this.reportForm.get("visibleData").value,
      otherInformation: this.reportForm.get("otherInformation").value,
      accessByPeople: this.reportForm.get("accessByPeople").value,
      deadline: this.reportForm.get("deadline").value,
      accessMethods: this.reportForm.get("accessMethods").value,
    };

    this.formEmitter.emit(reportForm);
  }

  public resetForm(): void {
    this.reportFormViewChild.resetForm();
    this.accessByPeopleArray = [];
    this.accessByMethodArray = [];
  }

  addPeopleToAccess() {
    const value = this.reportForm.get("accessByPeople").value;
    if (value === "") {
      return;
    }
    this.accessByPeopleArray.push(value);
    this.reportForm.patchValue({accessByPeople: ''});
  }

  addMethodToAccess() {
    const value = this.reportForm.get("accessMethods").value;
    if (value === "") {
      return;
    }
    this.accessByMethodArray.push(value);
    this.reportForm.patchValue({accessMethods: ''});
  }

  deletePeopleItem(index: number) {
    this.accessByPeopleArray.splice(index, 1);
  }

  deleteMethodItem(index: number) {
    this.accessByMethodArray.splice(index, 1);
  }


  get requestPriority() {
    return this.reportForm.get("requestPriority");
  }

  get name() {
    return this.reportForm.get("name");
  }

  get owner() {
    return this.reportForm.get("owner");
  }

  get reportType() {
    return this.reportForm.get("reportType");
  }

  get reportRefresh() {
    return this.reportForm.get("reportRefresh");
  }

  get purpose() {
    return this.reportForm.get("purpose");
  }

  get criteria() {
    return this.reportForm.get("criteria");
  }

  get visibleData() {
    return this.reportForm.get("visibleData");
  }

  get otherInformation() {
    return this.reportForm.get("otherInformation");
  }

  get accessByPeople() {
    return this.reportForm.get("accessByPeople");
  }

  get deadline() {
    return this.reportForm.get("deadline");
  }

  get accessMethods() {
    return this.reportForm.get("accessMethods");
  }


}
