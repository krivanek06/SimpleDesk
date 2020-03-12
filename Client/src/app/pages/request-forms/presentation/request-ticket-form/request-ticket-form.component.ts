import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {TicketForm, TicketSubtype} from "../../../../core/model/Request";

@Component({
  selector: 'app-request-ticket-form',
  templateUrl: './request-ticket-form.component.html',
  styleUrls: ['./request-ticket-form.component.scss']
})
export class RequestTicketFormComponent implements OnInit {
  @Input() softwareTypes: TicketSubtype[] = [];
  @Input() hardwareTypes: TicketSubtype[] = [];
  @Input() serverTypes: TicketSubtype[] = [];

  @Output() formEmitter: EventEmitter<TicketForm> = new EventEmitter<TicketForm>();

  @ViewChild('ticketFormViewChild', {static: true}) ticketFormViewChild;

  ticketForm: FormGroup;


  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.ticketForm = this.formBuilder.group({
      ticketType: new FormControl('', [Validators.required]),
      ticketSubtypeName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      requestPriority: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(254)]),
      problem: new FormControl('', [Validators.required, Validators.minLength(10)]),
    });
  }


  submit(): void {
    if (this.ticketForm.invalid) {
      return;
    }

    const ticketForm: TicketForm = {
      name: this.ticketForm.get("name").value,
      ticketType: this.ticketForm.get("ticketType").value,
      ticketSubtypeName: this.ticketForm.get("ticketSubtypeName").value,
      problem: this.ticketForm.get("problem").value,
      requestPriority: this.ticketForm.get("requestPriority").value,
    };

    this.formEmitter.emit(ticketForm);
  }

  public resetForm(): void {
    this.ticketFormViewChild.resetForm();
  }

  changeTicketType(): void {
    this.ticketForm.patchValue({ticketSubtypeName: ''});
  }

  get ticketType() {
    return this.ticketForm.get("ticketType");
  }

  get ticketSubtypeName() {
    return this.ticketForm.get("ticketSubtypeName");
  }

  get requestPriority() {
    return this.ticketForm.get("requestPriority");
  }

  get name() {
    return this.ticketForm.get("name");
  }

  get problem() {
    return this.ticketForm.get("problem");
  }

}
