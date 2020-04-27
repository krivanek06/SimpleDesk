import {NgModule} from '@angular/core';
import {UserRegistrationComponent} from "./views/user-registration/user-registration.component";
import {UserGroupManagementComponent} from "./views/user-group-management/user-group-management.component";
import {UserFormComponent} from "./presentation/user/user-form/user-form.component";
import {UserManagementButtonsComponent} from "./presentation/user/user-management-buttons/user-management-buttons.component";
import {GroupFormDetailsComponent} from "./presentation/group/group-form-details/group-form-details.component";
import {GroupFormComponent} from "./presentation/group/group-form/group-form.component";
import {UserManagementComponent} from "./container/user-management/user-management.component";
import {GroupManagementComponent} from "./container/group-management/group-management.component";
import {AppManagementComponent} from "./app-management.component";
import {RouterModule, Routes} from "@angular/router";
import {MaterialModule} from "../../material.module";
import {FormsModule} from "@angular/forms";
import {IconSpriteModule} from "ng-svg-icon-sprite";
import {SweetAlert2Module} from "@sweetalert2/ngx-sweetalert2";
import {SatDatepickerModule, SatNativeDateModule} from "saturn-datepicker";
import {SharedModule} from "../../shared/shared.module";
import {AuthGuard} from "../../core/guards/Auth.guard";
import {GroupRegistrationComponent} from "./views/group-registration/group-registration.component";
import {PrivilegeManagerGuard} from "./guard/privilege-manager.guard";
import {DatePipe} from "@angular/common";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthInterceptor} from "../../core/interceptors/AuthInterceptor ";
import {ErrorInterceptor} from "../../core/interceptors/ErrorInterceptor";
import {EffectsModule} from "@ngrx/effects";
import {AppManagementEffects} from "./store/app-management.effects";
import * as fromAppManagement from './store/app-management.reducer';
import {Store, StoreModule} from "@ngrx/store";

export const routes: Routes = [
  {
    path: '', component: AppManagementComponent, canActivate: [AuthGuard, PrivilegeManagerGuard],
    children: [
      {path: '', component: UserGroupManagementComponent, canActivate: [AuthGuard]},
      {path: 'register_user', component: UserRegistrationComponent, canActivate: [AuthGuard]},
      {path: 'register_group', component: GroupRegistrationComponent, canActivate: [AuthGuard]},
      {path: '**', redirectTo: ''}
    ]
  }
];


@NgModule({
  declarations: [
    UserRegistrationComponent,
    UserGroupManagementComponent,
    UserFormComponent,
    GroupRegistrationComponent,
    UserManagementButtonsComponent,
    GroupFormDetailsComponent,
    GroupFormComponent,
    UserManagementComponent,
    GroupManagementComponent,
    AppManagementComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    MaterialModule,
    FormsModule,
    IconSpriteModule,
    SweetAlert2Module.forRoot(),
    SatNativeDateModule,
    SatDatepickerModule,
    SharedModule,
    EffectsModule.forFeature([AppManagementEffects]),
    StoreModule.forFeature('app-management', fromAppManagement.reducer),
  ],
  exports: [
    RouterModule,
  ],
  providers: [
    DatePipe,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
  ]
})
export class AppManagementModule {
}
