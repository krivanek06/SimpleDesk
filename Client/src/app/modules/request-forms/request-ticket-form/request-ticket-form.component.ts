import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-request-ticket-form',
  templateUrl: './request-ticket-form.component.html',
  styleUrls: ['./request-ticket-form.component.scss']
})
export class RequestTicketFormComponent implements OnInit {
  ticketForm: FormGroup;

  private ticketURL = 'requests/ticket';

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.initFormGroup();
    //this.ticketForm.valueChanges.subscribe(console.log);
  }

  private initFormGroup(){
    this.ticketForm = this.formBuilder.group({
      ticketType: ['' , [
        Validators.required,
      ]],
      ticketSubtypeName: ['' , [
        Validators.required,
        Validators.minLength(2),
      ]],
      requestPriority: ['' , [
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

  get ticketSubtypeName(){
    return this.ticketForm.get("ticketSubtypeName");
  }

  get requestPriority(){
    return this.ticketForm.get("requestPriority");
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
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http.post(environment.apiUrl + this.ticketURL, this.ticketForm.value, {headers}).subscribe(succ => {
      Swal.fire(  '', 'Vaša požiadavka s id : ' + succ + ". bola zaznamenaná.", 'success'  )
    })
  }

  private resetTicketType(){
    this.ticketForm.patchValue({'ticketSubtypeName' : ''});
  }

}
