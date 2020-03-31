import {NgModule} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';

import {RequirementRoutingModule} from './requirement-routing.module';
import {RouterModule} from "@angular/router";
import {MaterialModule} from "../../material.module";
import {IconSpriteModule} from "ng-svg-icon-sprite";
import {AlertModule} from "ngx-bootstrap";
import {SweetAlert2Module} from "@sweetalert2/ngx-sweetalert2";
import {SharedModule} from "../../shared/shared.module";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthInterceptor} from "../../core/interceptors/AuthInterceptor ";
import {ErrorInterceptor} from "../../core/interceptors/ErrorInterceptor";
import {RequestManagementComponent} from "./view/request-details/presentation/detail/request-management/request-management.component";
import {RequestInformationComponent} from "./view/request-details/presentation/detail/request-information/request-information.component";
import {RequestContentComponent} from "./view/request-details/presentation/detail/request-content/request-content.component";
import {RequestCommentSharingComponent} from "./view/request-details/presentation/comment/request-comment-sharing/request-comment-sharing.component";
import {RequestCommentOptionsComponent} from "./view/request-details/presentation/comment/request-comment-options/request-comment-options.component";
import {RequestCommentFormComponent} from "./view/request-details/presentation/comment/request-comment-form/request-comment-form.component";
import {RequestCommentBodyComponent} from "./view/request-details/presentation/comment/request-comment-body/request-comment-body.component";
import {RequestManagementContainerComponent} from "./view/request-details/container/request-management-container/request-management-container.component";
import {RequestInformationContainerComponent} from "./view/request-details/container/request-information-container/request-information-container.component";
import {RequestCommentContainerComponent} from "./view/request-details/container/request-comment-container/request-comment-container.component";
import {RequestDetailsComponent} from "./view/request-details/request-details.component";
import {RequestClosedComponent} from "./view/request-closed/request-closed.component";
import {DashboardComponent} from "./view/request-open/dashboard.component";
import {RequestFormsComponent} from "./view/request-forms/request-forms.component";
import {RequestTicketFormComponent} from "./view/request-forms/presentation/request-ticket-form/request-ticket-form.component";
import {RequestReportFormComponent} from "./view/request-forms/presentation/request-report-form/request-report-form.component";
import {RequestFinanceFormComponent} from "./view/request-forms/presentation/request-finance-form/request-finance-form.component";
import {TicketFormPageComponent} from "./view/request-forms/view/ticket-form-page/ticket-form-page.component";
import {ReportFormPageComponent} from "./view/request-forms/view/report-form-page/report-form-page.component";
import {FinanceFormPageComponent} from "./view/request-forms/view/finance-form-page/finance-form-page.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {RequestEffects} from "./store/request.effets";
import {RequestFilterComponent} from "./components/request-filter/request-filter.component";
import {RequestTableComponent} from "./components/request-table/request-table.component";
import {SidebarModule} from "ng-sidebar";
import {MatTableExporterModule} from "mat-table-exporter";

import * as RequestReducer from './store/request.reducer';

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
    RequestClosedComponent,
    DashboardComponent,
    RequestFormsComponent,
    RequestTicketFormComponent,
    RequestReportFormComponent,
    RequestFinanceFormComponent,
    TicketFormPageComponent,
    ReportFormPageComponent,
    FinanceFormPageComponent,
    RequestFilterComponent,
    RequestTableComponent,
  ],
  imports: [
    MaterialModule,
    MatTableExporterModule,
    IconSpriteModule,
    AlertModule.forRoot(),
    SweetAlert2Module.forRoot(),
    SharedModule,
    RequirementRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forFeature('requirement', RequestReducer.reducer),
    EffectsModule.forFeature([RequestEffects]),
    SidebarModule,
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
export class RequirementModule {
}
