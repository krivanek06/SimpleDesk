import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import {SidebarModule} from "ng-sidebar";
import {RouterModule, Routes} from "@angular/router";
import {MaterialModule} from "../../material.module";
import {IconSpriteModule} from "ng-svg-icon-sprite";
import {AlertModule} from "ngx-bootstrap";
import {SatDatepickerModule, SatNativeDateModule} from "saturn-datepicker";
import {SharedModule} from "../../shared/shared.module";
import {RequestManagementComponent} from "./presentation/detail/request-management/request-management.component";
import {RequestInformationComponent} from "./presentation/detail/request-information/request-information.component";
import {RequestContentComponent} from "./presentation/detail/request-content/request-content.component";
import {RequestCommentSharingComponent} from "./presentation/comment/request-comment-sharing/request-comment-sharing.component";
import {RequestCommentOptionsComponent} from "./presentation/comment/request-comment-options/request-comment-options.component";
import {RequestCommentFormComponent} from "./presentation/comment/request-comment-form/request-comment-form.component";
import {RequestCommentBodyComponent} from "./presentation/comment/request-comment-body/request-comment-body.component";
import {RequestManagementContainerComponent} from "./container/request-management-container/request-management-container.component";
import {RequestInformationContainerComponent} from "./container/request-information-container/request-information-container.component";
import {RequestCommentContainerComponent} from "./container/request-comment-container/request-comment-container.component";
import {RequestDetailsComponent} from "./request-details.component";
import {AuthGuard} from "../../core/guards/AuthGuard";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthInterceptor} from "../../core/interceptors/AuthInterceptor ";
import {ErrorInterceptor} from "../../core/interceptors/ErrorInterceptor";


export const routes: Routes = [
  {
    path: '', component: RequestDetailsComponent, canActivate: [AuthGuard],
  }
];


@NgModule({
  declarations: [
    RequestManagementComponent,
    RequestInformationComponent,
    RequestContentComponent,
    RequestCommentSharingComponent,
    RequestCommentOptionsComponent,
    RequestCommentFormComponent,
    RequestCommentBodyComponent,
    RequestManagementContainerComponent,
    RequestInformationContainerComponent,
    RequestCommentContainerComponent,
    RequestDetailsComponent,
  ],
  imports: [
    CommonModule,
    SidebarModule.forRoot(),
    RouterModule.forChild(routes),
    MaterialModule,
    IconSpriteModule,
    AlertModule.forRoot(),
    SatNativeDateModule,
    SatDatepickerModule,
    SharedModule,
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
export class RequestDetailsModule { }
