import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-request-ticket-form',
  templateUrl: './request-ticket-form.component.html',
  styleUrls: ['./request-ticket-form.component.scss']
})
export class RequestTicketFormComponent implements OnInit {
  ticketForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initFormGroup();
    //this.ticketForm.valueChanges.subscribe(console.log);
  }

  private initFormGroup(){
    this.ticketForm = this.formBuilder.group({
      ticketType: ['' , [
        Validators.required,
      ]],
      ticketSubtupeName: ['' , [
        Validators.required,
        Validators.minLength(2),
      ]],
      priority: ['' , [
        Validators.required,
      ]],
      name: ['' , [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(254),
      ]],
      problem: ['' , [
        Validators.required,
        Validators.minLength(10),
      ]],
    })
  }

  get ticketType(){
    return this.ticketForm.get("ticketType");
  }

  get ticketSubtupeName(){
    return this.ticketForm.get("ticketSubtupeName");
  }

  get priority(){
    return this.ticketForm.get("priority");
  }

  get name(){
    return this.ticketForm.get("name");
  }

  get problem(){
    return this.ticketForm.get("problem");
  }


  private submit(){
    if(this.ticketForm.invalid){
      return;
    }
    
    const formValues = this.ticketForm.value;
    console.log(formValues);
  }

  private resetTicketType(){
    
    this.ticketForm.patchValue({ticketSubtupeName : ''});
  }

}
