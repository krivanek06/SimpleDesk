import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { accessValidator } from 'app/shared/validators/reportAccessValidator';

@Component({
  selector: 'app-request-report-form',
  templateUrl: './request-report-form.component.html',
  styleUrls: ['./request-report-form.component.scss']
})
export class RequestReportFormComponent implements OnInit {

  reportForm: FormGroup;

  accessByPeopleArray:any[] = [];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initFormGroup();
  }

  private initFormGroup(){
    this.reportForm = this.formBuilder.group({
      name: ['' , [
        Validators.required,
        Validators.minLength(5),
      ]],
      priority: ['' , [
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
  private submit(){

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

  private 

  get priority(){
    return this.reportForm.get("priority");
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
