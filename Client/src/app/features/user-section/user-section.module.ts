import {NgModule} from '@angular/core';
import {UserImagesComponent} from "./components/user-images/user-images.component";
import {UserProfileComponent} from "./view/user-profile/user-profile.component";
import {RouterModule, Routes} from "@angular/router";
import {MaterialModule} from "../../material.module";
import {IconSpriteModule} from "ng-svg-icon-sprite";
import {AlertModule} from "ngx-bootstrap";
import {SweetAlert2Module} from "@sweetalert2/ngx-sweetalert2";
import {SharedModule} from "../../shared/shared.module";
import {AuthGuard} from "../../core/guards/Auth.guard";
import {DatePipe} from "@angular/common";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthInterceptor} from "../../core/interceptors/AuthInterceptor ";
import {ErrorInterceptor} from "../../core/interceptors/ErrorInterceptor";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {UserSectionEffets} from "./store/user-section.effets";

import * as userSectionReducer from "./store/user-section.reducer";

export const routes: Routes = [
  {
    path: '', component: UserProfileComponent, canActivate: [AuthGuard],
  }
];



@NgModule({
  declarations: [
    UserImagesComponent,
    UserProfileComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    MaterialModule,
    IconSpriteModule,
    AlertModule.forRoot(),
    SweetAlert2Module.forRoot(),
    SharedModule,
    StoreModule.forFeature('userSection', userSectionReducer.reducer),
    EffectsModule.forFeature([UserSectionEffets]),
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
export class UserSectionModule {
}
