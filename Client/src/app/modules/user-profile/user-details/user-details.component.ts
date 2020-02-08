import { Component, OnInit, Output, Input } from '@angular/core';
import { PasswordContainer } from 'app/shared/models/PasswordContainer';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'environments/environment';
import { NgxSpinnerService } from 'ngx-spinner';
import { EventEmitter } from '@angular/core';
import { User } from 'app/shared/models/UserGroups';
import { SwallNotificationService } from 'app/shared/services/swall-notification.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  @Input() addImageClick = false;
  @Input() showPasswordChange = false;
  @Input() public displayedUser: User;
  @Output() changeWindow: EventEmitter<Boolean> = new EventEmitter<Boolean>();

  constructor( private http : HttpClient, 
                private spinner: NgxSpinnerService,
                private swallNotification: SwallNotificationService) { }

  ngOnInit() {
  }

  changeFrames(): void{
    this.changeWindow.emit(true);
  }

  async changePassword(){
    const { value: formValues } = await this.swallNotification.changePassword();
    if (formValues) {
      this.sendPasswordToAPI(this.convertFormValuesToPasswordContainer(formValues));
    }
  }

  private convertFormValuesToPasswordContainer(formValues: string[]): PasswordContainer{
    return <PasswordContainer> {oldPassword: formValues[0], newPassword1: formValues[1], newPassword2: formValues[2] };
  }

  private sendPasswordToAPI(password: PasswordContainer): void{
    if(password.newPassword1 !== password.newPassword2){
      this.swallNotification.generateErrorNotification(`Požiadavka o zmenu hesla nebola odoslaná`);
    }
    else if(password.newPassword1.length < 6 || password.newPassword2.length < 6){
      this.swallNotification.generateErrorNotification( `Minimálna dĺžka hesla je 6 znakov, požiadavka o zmenu hesla nebola odoslaná.`);
    }else{
      this.spinner.show();
      const headers = new HttpHeaders().set('Content-Type', 'application/json');
      this.http.put(environment.apiUrl + "user/changePassword" ,password, {headers : headers}).subscribe(() =>{
          this.swallNotification.generateNotification(`Heslo bolo zmenené`);
          this.spinner.hide();
      }, err =>  this.spinner.hide());
    }
  }

}
