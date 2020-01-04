import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParticlesModule } from 'angular-particle';
import { AlertModule } from 'ngx-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { IconSpriteModule } from 'ng-svg-icon-sprite';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { DatePipe } from '@angular/common'
import { NgxSpinnerModule } from "ngx-spinner";
import { RouterModule } from '@angular/router';
import { SidebarModule } from 'ng-sidebar';
import { SatNativeDateModule ,SatDatepickerModule } from 'saturn-datepicker';

// custom interceptors
import { AuthInterceptor } from './core/interceptors/AuthInterceptor ';
import { ErrorInterceptor } from './core/interceptors/ErrorInterceptor';

// custom components
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { ChartComponent } from './shared/components/chart/chart.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { UserProfileComponent } from './modules/user-profile/user-profile.component';
import { UserDetailsComponent } from './modules/user-profile/user-details/user-details.component';
import { PrivilegesComponent } from './modules/user-profile/privileges/privileges.component';
import { UserGroupsComponent } from './modules/user-profile/user-groups/user-groups.component';
import { GroupDetailsComponent } from './modules/user-profile/group-details/group-details.component';
import { RequestTicketFormComponent } from './modules/request-forms/request-ticket-form/request-ticket-form.component';
import { RequestReportFormComponent } from './modules/request-forms/request-report-form/request-report-form.component';
import { RequestFinanceFormComponent } from './modules/request-forms/request-finance-form/request-finance-form.component';
import { RequestClosedComponent } from './modules/request-closed/request-closed.component';
import { CommentComponent } from './modules/request-details/comment/comment.component';
import { RequestDetailsComponent } from './modules/request-details/request-details.component';
import { AppManagementComponent } from './modules/app-management/app-management.component';
import { RegisterUserComponent } from './modules/app-management/register-user/register-user.component';
import { RegisterGroupComponent } from './modules/app-management/register-group/register-group.component';
import { RequestFormsComponent } from './modules/request-forms/request-forms.component';
import { LoginComponent } from './modules/login/login.component';
import { LoginFormComponent } from './modules/login/login-form/login-form.component';
import { LoginBackgroundComponent } from './modules/login/login-background/loginBackground.component';
import { NavigationIconHoverDirective } from './shared/directives/navigation-icon-hover.directive';
import { FileUploadComponent } from './shared/components/file-upload/file-upload.component';
import { UserGroupManagementComponent } from './modules/app-management/user-group-management/user-group-management.component';
import { AuthenticationService } from './core/services/authentication.service';
import { UserService } from './core/services/user.service';
import { RequestTableComponent } from './shared/components/request-table/request-table.component';
import { FileServiceService } from './core/services/file-service.service';
import { UserImagesComponent } from './modules/user-profile/user-images/user-images.component';
import { RequestSideInformationComponent } from './modules/request-details/request-side-information/request-side-information.component';
import { CommentSharingComponent } from './modules/request-details/comment-sharing/comment-sharing.component';
import { RequestSideOptionsComponent } from './modules/request-details/request-side-options/request-side-options.component';
import { RequestFilterComponent } from './shared/components/request-filter/request-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    LoginFormComponent,
    LoginBackgroundComponent,
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
    CommentComponent,
    RequestDetailsComponent,
    AppManagementComponent,
    RegisterUserComponent,
    RegisterGroupComponent,
    RequestFormsComponent,
    LoginComponent,
    NavigationIconHoverDirective,
    FileUploadComponent,
    UserGroupManagementComponent,
    RequestTableComponent,
    UserImagesComponent,
    RequestSideInformationComponent,
    CommentSharingComponent,
    RequestSideOptionsComponent,
    RequestFilterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    ParticlesModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IconSpriteModule,
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
    UserService,
    FileServiceService,
    { provide: HTTP_INTERCEPTORS,  useClass: AuthInterceptor, multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
