import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ImageDTO, PasswordContainer, User} from "../../../../../../core/model/User";
import {Store} from "@ngrx/store";
import {Group} from "../../../../../../core/model/Group";
import {AppState} from "../../../../../../core/model/appState.model";
import {RequestStatistics} from "../../../../../requirement/model/Request";
import {swallErrorNotification, swallSelectImage} from "../../../../../../shared/utils/swall-notification";
import * as fromUserSection from '../../../../store/user/user-stat.reducer';
import * as fromUser from '../../../../../../core/store/user/user.reducer';
import * as userSectionAction from '../../../../store/user/user-stat.action';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {

  displayAvatars = false;

  user$: Observable<User>;
  availableAvatars$: Observable<ImageDTO[]>;
  selectedGroup$: Observable<Group>;
  requestMonthlyStatistics$: Observable<RequestStatistics>;


  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.user$ = this.store.select(fromUser.getUser);
    this.availableAvatars$ = this.store.select(fromUserSection.getAvailableAvatars);
    this.selectedGroup$ = this.store.select(fromUserSection.getGroup);
    this.requestMonthlyStatistics$ = this.store.select(fromUserSection.getRequestMonthlyStatistics);

    this.store.dispatch(userSectionAction.getRequestMonthlyStatistics());
  }


  initGroupPrivileges(groupName: string): void {
    this.store.dispatch(userSectionAction.getGroupDetails({groupName}));
  }

  changePassword(password: PasswordContainer): void {
    if (password.newPassword1 !== password.newPassword2) {
      swallErrorNotification(`Zadané heslá sa nezhodujú, požiadavka o zmenu hesla nebola odoslaná`);
    } else if (password.newPassword1.length < 6 || password.newPassword2.length < 6) {
      swallErrorNotification(`Minimálna dĺžka hesla je 6 znakov, požiadavka o zmenu hesla nebola odoslaná.`);
    } else {
      this.store.dispatch(userSectionAction.changePassword({password}));
    }
  }

  changeFrames(): void {
    this.displayAvatars = !this.displayAvatars;
    this.store.dispatch(userSectionAction.getAvailableAvatars());
  }

  selectImage(image: ImageDTO) {
    swallSelectImage(image.imageBytes).then(result => {
      if (result.value === true) {
        this.store.dispatch(userSectionAction.changeImage({image}));
      }
    });

  }

}
