import {Component, OnInit, Output, Input} from '@angular/core';
import {EventEmitter} from '@angular/core';
import {PasswordContainer, User} from 'app/core/model/User';
import {swallChangePassword} from 'app/shared/utils/swall-notification';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  @Input() addImageClick = false;
  @Input() showPasswordChange = false;
  @Input() displayedUser: User;
  @Output() changePasswordEmitter: EventEmitter<PasswordContainer> = new EventEmitter<PasswordContainer>();
  @Output() changeImageEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit() {
  }

  changeImage(): void {
    this.changeImageEmitter.emit(true);
  }

  async changePassword() {
    const {value: formValues} = await swallChangePassword();
    if (formValues) {
      const passwordContainer: PasswordContainer = {
        oldPassword: formValues[0],
        newPassword1: formValues[1],
        newPassword2: formValues[2]
      };
      this.changePasswordEmitter.emit(passwordContainer);

    }
  }

}
