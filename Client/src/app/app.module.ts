import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {AppRoutingModule, routingComponents} from './app-routing.module';
import {AppComponent} from './app.component';
import {AlertModule} from 'ngx-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {IconSpriteModule} from 'ng-svg-icon-sprite';
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';
import {DatePipe} from '@angular/common';
import {NgxSpinnerModule} from "ngx-spinner";
import {RouterModule} from '@angular/router';
import {SidebarModule} from 'ng-sidebar';
import {
  SatNativeDateModule,
  SatDatepickerModule,
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE
} from 'saturn-datepicker';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import {IgxExcelExporterService} from "igniteui-angular";
import { ParticlesModule } from 'angular-particle';

// custom interceptors
import {AuthInterceptor} from './core/interceptors/AuthInterceptor ';
import {ErrorInterceptor} from './core/interceptors/ErrorInterceptor';

// custom components
import {NavigationComponent} from './core/components/navigation/navigation.component';
import {HeaderComponent} from './core/components/header/header.component';
import {ChartComponent} from './shared/components/chart/chart.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {UserProfileComponent} from './pages/user-profile/user-profile.component';
import {UserDetailsComponent} from './resources/user/views/user-details/user-details.component';
import {PrivilegesComponent} from './resources/privilege/view/privileges/privileges.component';
import {UserGroupsComponent} from './resources/user/views/user-groups/user-groups.component';
import {GroupDetailsComponent} from './resources/group/view/group-details/group-details.component';
import {RequestTicketFormComponent} from './resources/request/view/form/request-ticket-form/request-ticket-form.component';
import {RequestReportFormComponent} from './resources/request/view/form/request-report-form/request-report-form.component';
import {RequestFinanceFormComponent} from './resources/request/view/form/request-finance-form/request-finance-form.component';
import {RequestClosedComponent} from './pages/request-closed/request-closed.component';
import {RequestDetailsComponent} from './pages/request-details/request-details.component';
import {AppManagementComponent} from './pages/app-management/app-management.component';
import {UserFormComponent} from './resources/user/views/user-form/user-form.component';
import {GroupFormComponent} from './resources/group/view/group-form/group-form.component';
import {RequestFormsComponent} from './pages/request-forms/request-forms.component';
import {LoginComponent} from './pages/login/login.component';
import {NavigationIconHoverDirective} from './shared/directives/navigation-icon-hover.directive';
import {FileUploadComponent} from './shared/components/file-upload/file-upload.component';
import {GroupManagementComponent} from './pages/app-management/container/group-management/group-management.component';
import {AuthenticationService} from './core/services/authentication.service';
import {UserStoreService} from './core/services/user-store.service';
import {RequestTableComponent} from './shared/components/request-table/request-table.component';
import {FileServiceService} from './core/services/file-service.service';
import {UserImagesComponent} from './resources/user/views/user-images/user-images.component';
import {RequestManagementContainerComponent} from './pages/request-details/container/request-management-container/request-management-container.component';
import {RequestFilterComponent} from './shared/components/request-filter/request-filter.component';
import {UnauthorizedComponent} from './pages/unauthorized/unauthorized.component';
import {DotLoaderComponent} from './shared/components/dot-loader/dot-loader.component';
import {SERDButtonsComponent} from './shared/components/serdbuttons/serdbuttons.component';
import {RequestCommentFormComponent} from './resources/request/view/comment/request-comment-form/request-comment-form.component';
import {UserManagementButtonsComponent} from './resources/user/views/user-management-buttons/user-management-buttons.component';
import {UserManagementComponent} from './pages/app-management/container/user-management/user-management.component';
import {UserGroupManagementComponent} from './pages/app-management/views/user-group-management/user-group-management.component';
import {GroupFormDetailsComponent} from './resources/group/view/group-form-details/group-form-details.component';
import {GroupRegistrationComponent} from './pages/app-management/views/group-registration/group-registration.component';
import {UserRegistrationComponent} from './pages/app-management/views/user-registration/user-registration.component';
import {RequestCommentBodyComponent} from './resources/request/view/comment/request-comment-body/request-comment-body.component';
import {RequestCommentSharingComponent} from './resources/request/view/comment/request-comment-sharing/request-comment-sharing.component';
import {RequestCommentOptionsComponent} from './resources/request/view/comment/request-comment-options/request-comment-options.component';
import {RequestManagementComponent} from './resources/request/view/detail/request-management/request-management.component';
import {RequestContentComponent} from './resources/request/view/detail/request-content/request-content.component';
import {RequestCommentContainerComponent} from './pages/request-details/container/request-comment-container/request-comment-container.component';
import {TicketFormPageComponent} from './pages/request-forms/view/ticket-form-page/ticket-form-page.component';
import {ReportFormPageComponent} from './pages/request-forms/view/report-form-page/report-form-page.component';
import {FinanceFormPageComponent} from './pages/request-forms/view/finance-form-page/finance-form-page.component';
import { RequestInformationComponent } from './resources/request/view/detail/request-information/request-information.component';
import { RequestInformationContainerComponent } from './pages/request-details/container/request-information-container/request-information-container.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    NavigationComponent,
    HeaderComponent,
    ChartComponent,
    DashboardComponent,
    UserProfileComponent,
    UserDetailsComponent,
    UserGroupsComponent,
    GroupDetailsComponent,
    PrivilegesComponent,
    RequestTicketFormComponent,
    RequestReportFormComponent,
    RequestFinanceFormComponent,
    RequestClosedComponent,
    RequestCommentBodyComponent,
    RequestDetailsComponent,
    AppManagementComponent,
    UserFormComponent,
    GroupFormComponent,
    RequestFormsComponent,
    LoginComponent,
    NavigationIconHoverDirective,
    FileUploadComponent,
    GroupManagementComponent,
    RequestTableComponent,
    UserImagesComponent,
    RequestCommentSharingComponent,
    RequestManagementContainerComponent,
    RequestFilterComponent,
    UnauthorizedComponent,
    DotLoaderComponent,
    SERDButtonsComponent,
    RequestCommentFormComponent,
    RequestCommentOptionsComponent,
    UserManagementButtonsComponent,
    UserManagementComponent,
    UserGroupManagementComponent,
    GroupFormDetailsComponent,
    UserRegistrationComponent,
    GroupRegistrationComponent,
    RequestManagementComponent,
    RequestContentComponent,
    RequestCommentContainerComponent,
    TicketFormPageComponent,
    ReportFormPageComponent,
    FinanceFormPageComponent,
    RequestInformationComponent,
    RequestInformationContainerComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IconSpriteModule,
    ParticlesModule,
    AlertModule.forRoot(),
    BrowserAnimationsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    SweetAlert2Module.forRoot(),
    NgxSpinnerModule,
    RouterModule,
    SidebarModule.forRoot(),
    SatNativeDateModule,
    SatDatepickerModule,
  ],
  providers: [
    DatePipe,
    AuthenticationService,
    UserStoreService,
    FileServiceService,
    IgxExcelExporterService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
