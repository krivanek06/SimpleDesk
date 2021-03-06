import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {FinanceForm, FinanceType, ReportForm} from "../../../../model/Request";
import {Confirmable} from "../../../../../../shared/utils/swall-notification";

@Component({
  selector: 'app-request-finance-form',
  templateUrl: './request-finance-form.component.html',
  styleUrls: ['./request-finance-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RequestFinanceFormComponent implements OnInit {
  financeForm: FormGroup;
  checkUrgent = false;

  @Input() financeTypeArray: string[] = [];
  @Input() financeTypeArrayDisabled: string[] = [];

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

  changeToUrgent() {
    this.checkUrgent = !this.checkUrgent;
    if (this.checkUrgent) {
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
      name: this.financeForm.get("name").value === null ? '' : this.financeForm.get("name").value,
      financeType: this.financeForm.get("financeType").value,
      requestPriority: this.financeForm.get("requestPriority").value,
    };

    this.emitForm(financeForm);
  }

  @Confirmable(`Naozaj chcetete odoslať požiadavku na účtáreň ?`)
  private emitForm(financeForm: FinanceForm) {
    this.formEmitter.emit(financeForm);

    // reset form
    this.financeFormViewChild.resetForm();
    this.financeForm.patchValue({requestPriority: 'nízka'});
    this.checkUrgent = false;

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
