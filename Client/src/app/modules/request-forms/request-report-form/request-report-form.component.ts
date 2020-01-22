import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { accessValidator } from 'app/shared/validators/reportAccessValidator';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import Swal from 'sweetalert2';
import { DatePipe } from '@angular/common';
import { FileServiceService } from 'app/core/services/file-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { FileUploadComponent } from 'app/shared/components/file-upload/file-upload.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-request-report-form',
  templateUrl: './request-report-form.component.html',
  styleUrls: ['./request-report-form.component.scss']
})
export class RequestReportFormComponent implements OnInit {
  reportForm: FormGroup;
  accessByPeopleArray:any[] = []; // people who can access report
  accessByMethodArray:any[] = [];

  @ViewChild('fileUploader',  {static: true}) fileInput: FileUploadComponent;

  constructor(private formBuilder: FormBuilder, private http : HttpClient, private fileService: FileServiceService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.reportForm = this.formBuilder.group({
      name: ['' , [
        Validators.required,
        Validators.minLength(5),
      ]],
      requestPriority: ['' , [
        Validators.required,
      ]],
      owner: ['' , [
        Validators.required,
      ]],
      reportType: ['' , [
        Validators.required,
      ]],
      reportRefresh: ['' , [
        Validators.required,
      ]],
      purpose: ['' , [
        Validators.required,
      ]],
      criteria: ['' , [
        Validators.required,
      ]],
      visibleData: ['' , [
        Validators.required,
      ]],
      otherInformation: '', 
      accessMethods: ['' , [
         accessValidator(this.accessByMethodArray)
      ]],
      accessByPeople:['', [ accessValidator(this.accessByPeopleArray)]],
      deadline: ['' , [
        Validators.required,
      ]],
    });

  }

  private sendReportFormToAPI(): Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.reportForm.patchValue({'accessByPeople' : this.accessByPeopleArray.join(",")});
    this.reportForm.patchValue({'accessMethods' : this.accessByMethodArray.join(",")});

    console.log( this.reportForm)
    return this.http.post(environment.apiUrl + "requests/report", this.reportForm.value, {headers});
  }
  private submit(): void{
    if(this.reportForm.invalid){
      return;
    }

    Swal.fire({ text: "Naozaj chcetete odoslať report ? ", icon: 'warning', showCancelButton: true,
      confirmButtonColor: '#3085d6',  cancelButtonColor: '#d33',  cancelButtonText: "Zrušiť",  confirmButtonText: 'Ano'
    }).then((result) => {
      if (result.value) {
        this.spinner.show();
        this.sendReportFormToAPI().subscribe(id => {
          this.fileService.postFileForRequest(id , this.fileInput.files).subscribe(succ => {
            this.spinner.hide();
            Swal.fire({ position: 'top-end', text:  'Vaša požiadavka s id : ' + id + ". bola zaznamenaná.", showConfirmButton: false, timer: 1200 })
         });
        })
      }
    })
  }


  private addPeopleToAccess(){
    const value = this.reportForm.get("accessByPeople").value;
    if(value === ""){
      return;
    }
    this.accessByPeopleArray.push(value);
    this.reportForm.patchValue({accessByPeople : ''});
  }

  private addMethodToAccess(){
    const value = this.reportForm.get("accessMethods").value;
    if(value === ""){
      return;
    }
    this.accessByMethodArray.push(value);
    this.reportForm.patchValue({accessMethods : ''});
  }

  private deletePeopleItem(index: number){
    this.accessByPeopleArray.splice(index,1);
  }

  private deleteMethodItem(index: number){
    this.accessByMethodArray.splice(index,1);
  }
 

  get requestPriority(){
    return this.reportForm.get("requestPriority");
  }

  get name(){
    return this.reportForm.get("name");
  }

  get owner(){
    return this.reportForm.get("owner");
  }

  get reportType(){
    return this.reportForm.get("reportType");
  }

  get reportRefresh(){
    return this.reportForm.get("reportRefresh");
  }

  get purpose(){
    return this.reportForm.get("purpose");
  }

  get criteria(){
    return this.reportForm.get("criteria");
  }

  get visibleData(){
    return this.reportForm.get("visibleData");
  }

  get otherInformation(){
    return this.reportForm.get("otherInformation");
  }

  get accessByPeople(){
    return this.reportForm.get("accessByPeople");
  }

  get deadline(){
    return this.reportForm.get("deadline");
  }

  get accessMethods(){
    return this.reportForm.get("accessMethods");
  }

  

}
