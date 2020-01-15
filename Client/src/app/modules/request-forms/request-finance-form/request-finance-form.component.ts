import { Component, OnInit, ViewChild } from '@angular/core';
import { FinanceType } from 'app/shared/models/FinanceType';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import Swal from 'sweetalert2';
import { environment } from 'environments/environment';
import { FileUploadComponent } from '../../../shared/components/file-upload/file-upload.component';
import { FileServiceService } from 'app/core/services/file-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-request-finance-form',
  templateUrl: './request-finance-form.component.html',
  styleUrls: ['./request-finance-form.component.scss']
})
export class RequestFinanceFormComponent implements OnInit {
  public financeTypeArray:FinanceType[] = [];
  financeForm: FormGroup;
  @ViewChild('fileUploader',  {static: true}) fileInput: FileUploadComponent;

  constructor(private formBuilder: FormBuilder, 
    private http: HttpClient, 
    private fileService: FileServiceService,
    private spinner: NgxSpinnerService) { }


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
      requestPriority: ['malá' ],
    })
  }

  public changeToUrgent(checked){
      if(checked){
        this.financeForm.patchValue({'requestPriority' : 'vysoká'});
      }else{
        this.financeForm.patchValue({'requestPriority' : 'malá'});
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

  private submit() : void{
    if(this.financeForm.invalid || this.fileInput.isEmpty()){ 
      return;
    }
    Swal.fire({ text: "Naozaj chcetete odoslať požiadavku na financie ? ", icon: 'warning', showCancelButton: true,
      confirmButtonColor: '#3085d6',  cancelButtonColor: '#d33',  cancelButtonText: "Zrušiť",  confirmButtonText: 'Ano'
    }).then((result) => {
      if (result.value) {
        this.spinner.show();
        this.sendFinanceFormToAPI().subscribe((id : number) => 
          this.fileService.postFileForRequest(id , this.fileInput.files).subscribe(succ => {
              this.spinner.hide();
              Swal.fire({ position: 'top-end', text: 'Vaša požiadavka s id : ' + id + ". bola zaznamenaná.'", showConfirmButton: false, timer: 1200 })
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
