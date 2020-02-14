import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {FinanceForm, FinanceType} from "../../../model/Finance";

@Component({
  selector: 'app-request-finance-form',
  templateUrl: './request-finance-form.component.html',
  styleUrls: ['./request-finance-form.component.scss']
})
export class RequestFinanceFormComponent implements OnInit {
  financeForm: FormGroup;

  @Input() financeTypeArray: FinanceType[] = [];

  @Output() formEmitter: EventEmitter<FinanceForm> = new EventEmitter<FinanceForm>();

  @ViewChild('financeFormViewChild', {static: true}) financeFormViewChild;

  constructor(private formBuilder: FormBuilder) {
  }


  ngOnInit() {
    this.financeForm = this.formBuilder.group({
      financeType: ['', [
        Validators.required,
      ]],
      name: [''],
      requestPriority: ['nízka'],
    });
  }

  changeToUrgent(checked) {
    if (checked) {
      this.financeForm.patchValue({requestPriority: 'vysoká'});
    } else {
      this.financeForm.patchValue({requestPriority: 'nízka'});
    }
  }


  submit(): void {
    if (this.financeForm.invalid) {
      return;
    }
    const financeForm: FinanceForm = {
      name: this.financeForm.get("name").value,
      financeType: this.financeForm.get("financeType").value,
      requestPriority: this.financeForm.get("requestPriority").value,
    };

    this.formEmitter.emit(financeForm);
  }

  public resetForm() {
    this.financeFormViewChild.resetForm();
  }

  get financeType() {
    return this.financeForm.get("financeType");
  }

  get requestPriority() {
    return this.financeForm.get("requestPriority");
  }

  get name() {
    return this.financeForm.get("name");
  }

}
