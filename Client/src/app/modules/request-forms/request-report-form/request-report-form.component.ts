import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { accessValidator } from 'app/shared/validators/reportAccessValidator';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import Swal from 'sweetalert2';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-request-report-form',
  templateUrl: './request-report-form.component.html',
  styleUrls: ['./request-report-form.component.scss']
})
export class RequestReportFormComponent implements OnInit {
  reportForm: FormGroup;
  deadlineReport: string;
  accessByPeopleArray:any[] = [];

  constructor(private formBuilder: FormBuilder, private http : HttpClient, private datepipe: DatePipe) { }

  ngOnInit() {
    this.initFormGroup();
  }

  private initFormGroup(){
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
      accessBy:['', [ accessValidator(this.accessByPeopleArray)]],
      deadline: ['' , [
        Validators.required,
      ]],
    })
  }

  private sendReportFormToAPI(): void{
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.reportForm.patchValue({'accessBy' : this.accessByPeopleArray.join(",")});
    this.http.post(environment.apiUrl + "requests/report", this.reportForm.value, {headers}).subscribe(succ => {
      Swal.fire(  '', 'Vaša požiadavka s id : ' + succ + ". bola zaznamenaná.", 'success'  )
    })
  }
  private submit(): void{
    if(this.reportForm.invalid){
      return;
    }
    Swal.fire({ text: "Naozaj chcetete odoslať report ? ", icon: 'warning', showCancelButton: true,
      confirmButtonColor: '#3085d6',  cancelButtonColor: '#d33',  cancelButtonText: "Zrušiť",  confirmButtonText: 'Ano'
    }).then((result) => {
      if (result.value) {
        this.sendReportFormToAPI();
      }
    })
  }

  private addPeopleToAccess(){
    const value = this.reportForm.get("accessBy").value;
    if(value === ""){
      return;
    }
    this.accessByPeopleArray.push(value);
    this.reportForm.patchValue({accessBy : ''});
  }

  private deleteItem(index: number){
    this.accessByPeopleArray.splice(index,1);
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

  get accessBy(){
    return this.reportForm.get("accessBy");
  }

  get deadline(){
    return this.reportForm.get("deadline");
  }
  

}
