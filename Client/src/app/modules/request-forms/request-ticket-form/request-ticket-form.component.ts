import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'environments/environment';
import Swal from 'sweetalert2';
import { TicketSubtype } from 'app/shared/models/TicketSubtype';
import { FileUploadComponent } from 'app/shared/components/file-upload/file-upload.component';
import { FileServiceService } from 'app/core/services/file-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { SwallNotificationService } from 'app/shared/services/swall-notification.service';

@Component({
  selector: 'app-request-ticket-form',
  templateUrl: './request-ticket-form.component.html',
  styleUrls: ['./request-ticket-form.component.scss']
})
export class RequestTicketFormComponent implements OnInit {
  public softwareTypes:TicketSubtype[] = []; 
  public hardwareTypes:TicketSubtype[] = [];
  public serverTypes:TicketSubtype[] = [];

  ticketForm: FormGroup;

  @ViewChild('fileUploader',  {static: true}) fileInput: FileUploadComponent;

  @ViewChild('ticketFormViewChild',  {static: true}) ticketFormViewChild;

  constructor(private formBuilder: FormBuilder, 
              private http: HttpClient,
              private fileService: FileServiceService, 
              private spinner: NgxSpinnerService,
              private swallNotification: SwallNotificationService) { }

  ngOnInit() {
    this.ticketForm = this.formBuilder.group({
      ticketType:  new FormControl('' , [ Validators.required, ]),
      ticketSubtypeName:  new FormControl('' , [ Validators.required,  Validators.minLength(2), ]),
      requestPriority:  new FormControl('' , [ Validators.required, ]),
      name:  new FormControl('' , [ Validators.required, Validators.minLength(5), Validators.maxLength(254),]),
      problem:  new FormControl('' , [ Validators.required,  Validators.minLength(10), ]),
    });
  }

  

  private sendTicketFormToAPI(): Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(environment.apiUrl + 'requests/ticket', this.ticketForm.value, {headers});
  }

  submit() : void{
    if(this.ticketForm.invalid){ 
      return;
    }

    this.swallNotification.generateQuestion(`Naozaj chcetete odoslať ticket ?`).then((result) => {
      if (result.value) {
        this.spinner.show();
        this.sendTicketFormToAPI().subscribe(id => {
            this.fileService.postFileForRequest(id , this.fileInput.files).subscribe(succ => {
              this.ticketFormViewChild.resetForm();
              this.spinner.hide();
              this.swallNotification.generateNotification(`Vaša požiadavka s id : ${id}. bola zaznamenaná. `);
            }, err => this.spinner.hide());
        });
      }
    })
  }

  changeTicketType(value: string): void{
    this.loadTicketSubtype(value);
    this.ticketForm.patchValue({'ticketSubtypeName' : ''});
  }

  private loadTicketSubtype(value: string): void{
    //let headers = new Headers().set('Content-Type', 'application/json');
    let params = new HttpParams().set('ticketTypeName' , value)  

    if(value === 'Software' && this.softwareTypes.length === 0){
      this.http.get<TicketSubtype[]>(environment.apiUrl + "requests/ticket/ticketSubtype", {params: params})
        .subscribe(ticketSubTypes =>this.softwareTypes = ticketSubTypes)
    }
    else if(value === 'Hardware' && this.hardwareTypes.length === 0){
      this.http.get<TicketSubtype[]>(environment.apiUrl + "requests/ticket/ticketSubtype", {params: params})
        .subscribe(ticketSubTypes =>this.hardwareTypes = ticketSubTypes)
    }
    else if(value === 'Server' && this.serverTypes.length === 0){
      this.http.get<TicketSubtype[]>(environment.apiUrl + "requests/ticket/ticketSubtype", {params: params})
        .subscribe(ticketSubTypes =>this.serverTypes = ticketSubTypes)
    }

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

}
