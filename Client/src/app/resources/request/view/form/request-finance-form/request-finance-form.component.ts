import { Component, OnInit, ViewChild } from '@angular/core';
import { FinanceType } from 'app/shared/models/FinanceType';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import Swal from 'sweetalert2';
import { environment } from 'environments/environment';
import { FileUploadComponent } from '../../../../../shared/components/file-upload/file-upload.component';
import { FileServiceService } from 'app/core/services/file-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { SwallNotificationService } from 'app/shared/services/swall-notification.service';

@Component({
  selector: 'app-request-finance-form',
  templateUrl: './request-finance-form.component.html',
  styleUrls: ['./request-finance-form.component.scss']
})
export class RequestFinanceFormComponent implements OnInit {
  public financeTypeArray:FinanceType[] = [];
  financeForm: FormGroup;
  @ViewChild('fileUploader',  {static: true}) fileInput: FileUploadComponent;
  @ViewChild('financeFormViewChild',  {static: true}) financeFormViewChild;

  constructor(private formBuilder: FormBuilder, 
              private http: HttpClient, 
              private fileService: FileServiceService,
              private spinner: NgxSpinnerService,
              private swallNotification: SwallNotificationService) { }


  ngOnInit() {
    this.loadFinanceType();
    this.initFormGroup();
  }

  private initFormGroup(){
    this.financeForm = this.formBuilder.group({
      financeType: ['' , [
        Validators.required,
      ]],
      name: [''  ],
      requestPriority: ['nízka' ],
    })
  }

  changeToUrgent(checked){
      if(checked){
        this.financeForm.patchValue({'requestPriority' : 'vysoká'});
      }else{
        this.financeForm.patchValue({'requestPriority' : 'nízka'});
      }
  }

  private loadFinanceType(): void{
    this.http.get<FinanceType[]>(environment.apiUrl + "requests/finance/types")
      .subscribe(financeType => this.financeTypeArray = financeType);
  }

  private sendFinanceFormToAPI(): Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(environment.apiUrl + 'requests/finance', this.financeForm.value, {headers})
  }

  submit() : void{
    if(this.financeForm.invalid || this.fileInput.isEmpty()){ 
      return;
    }
    this.swallNotification.generateQuestion(`Naozaj chcetete odoslať na účtáreň ?`).then((result) => {
      if (result.value) {
        this.spinner.show();
        this.sendFinanceFormToAPI().subscribe((id : number) => 
          this.fileService.postFileForRequest(id , this.fileInput.files).subscribe(() => {
            this.financeFormViewChild.resetForm();
              this.spinner.hide();
              this.swallNotification.generateNotification(`Vaša požiadavka s id : ${id}. bola zaznamenaná. `);
        }))
      }
    })
  }

  get financeType(){
    return this.financeForm.get("financeType");
  }

  get requestPriority(){
    return this.financeForm.get("requestPriority");
  }

  get name(){
    return this.financeForm.get("name");
  }

}