import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Reminder} from "../../../../model/Reminder.model";


@Component({
  selector: 'app-calendar-form',
  templateUrl: './calendar-form.component.html',
  styleUrls: ['./calendar-form.component.scss']
})
export class CalendarFormComponent implements OnInit {
  @Output() changeWindowEmitter: EventEmitter<any> = new EventEmitter<any>();
  @Output() formEmitter: EventEmitter<Reminder> = new EventEmitter<Reminder>();
  @ViewChild('reminderFormViewChild') reminderFormViewChild;

  reminderForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.reminderForm = this.formBuilder.group({
      startMoment: ['', [
        Validators.required,
      ]],
      endMoment: [undefined],
      title: ['', [
        Validators.required,
      ]],
      description: ['', [
        Validators.required,
      ]],
    });

  }

  submit(): void {
    if (this.reminderForm.invalid) {
      return;
    }
    const reminder: Reminder = {
      id: undefined,
      timestampStart: this.reminderForm.get("startMoment").value,
      timestampEnd: this.reminderForm.get("endMoment").value,
      title: this.reminderForm.get("title").value,
      description: this.reminderForm.get("description").value
    };
    this.formEmitter.emit(reminder);
  }

  public resetForm() {
    this.reminderFormViewChild.resetForm();
  }

  get startMoment() {
    return this.reminderForm.get("startMoment");
  }

  get endMoment() {
    return this.reminderForm.get("endMoment");
  }

  get title() {
    return this.reminderForm.get("title");
  }

  get description() {
    return this.reminderForm.get("description");
  }

}
