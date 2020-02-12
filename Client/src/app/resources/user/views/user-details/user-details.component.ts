import { Component, OnInit, Output, Input } from '@angular/core';
import { PasswordContainer } from 'app/shared/models/PasswordContainer';
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
  @Input()  displayedUser: User;
  @Output() changePasswordEmitter: EventEmitter<PasswordContainer> = new EventEmitter<PasswordContainer>();
  @Output() changeImageEmitter: EventEmitter<Boolean> = new EventEmitter<Boolean>();

  constructor(  private swallNotification: SwallNotificationService) { }

  ngOnInit() {
  }

  changeImage(): void{
    this.changeImageEmitter.emit(true);
  }

  async changePassword(){
    const { value: formValues } = await this.swallNotification.changePassword();
    if (formValues) {
      const password: PasswordContainer = {oldPassword: formValues[0], newPassword1: formValues[1], newPassword2: formValues[2] };
      if(password.newPassword1 !== password.newPassword2){
        this.swallNotification.generateErrorNotification(`Zadané heslá sa nezhodujú, požiadavka o zmenu hesla nebola odoslaná`);
      }
      else if(password.newPassword1.length < 6 || password.newPassword2.length < 6){
        this.swallNotification.generateErrorNotification( `Minimálna dĺžka hesla je 6 znakov, požiadavka o zmenu hesla nebola odoslaná.`);
      }else{
        this.changePasswordEmitter.emit(password);
      }
    }
  }

}
