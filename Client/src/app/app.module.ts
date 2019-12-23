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

// custom interceptors
import { AuthInterceptor } from './core/interceptors/AuthInterceptor ';
import { ErrorInterceptor } from './core/interceptors/ErrorInterceptor';

// custom components
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { ChartComponent } from './shared/components/chart/chart.component';
import { UnauthorizedPopUpComponent } from './shared/components/popUp/unauthorized-pop-up/unauthorized-pop-up.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { MyOpenRequestsComponent } from './modules/dashboard/my-open-requests/my-open-requests.component';
import { TeamOpenRequestsComponent } from './modules/dashboard/team-open-requests/team-open-requests.component';
import { TeamAssignedRequestsComponent } from './modules/dashboard/team-assigned-requests/team-assigned-requests.component';
import { OtherOpenRequestsComponent } from './modules/dashboard/other-open-requests/other-open-requests.component';
import { UserProfileComponent } from './modules/user-profile/user-profile.component';
import { UserDetailsComponent } from './modules/user-profile/user-details/user-details.component';
import { UserPrivilegesComponent } from './modules/user-profile/user-privileges/user-privileges.component';
import { UserGroupsComponent } from './modules/user-profile/user-groups/user-groups.component';
import { GroupDetailsComponent } from './modules/user-profile/group-details/group-details.component';
import { GroupPrivilegesComponent } from './modules/user-profile/group-privileges/group-privileges.component';
import { RequestTicketFormComponent } from './modules/request-forms/request-ticket-form/request-ticket-form.component';
import { RequestReportFormComponent } from './modules/request-forms/request-report-form/request-report-form.component';
import { RequestFinanceFormComponent } from './modules/request-forms/request-finance-form/request-finance-form.component';
import { RequestClosedComponent } from './modules/request-closed/request-closed.component';
import { CommentComponent } from './modules/request-details/comment/comment.component';
import { SideInformationsComponent } from './modules/request-details/side-informations/side-informations.component';
import { RequestDetailsComponent } from './modules/request-details/request-details.component';
import { AppManagementComponent } from './modules/app-management/app-management.component';
import { RegisterUserComponent } from './modules/app-management/register-user/register-user.component';
import { RegisterGroupComponent } from './modules/app-management/register-group/register-group.component';
import { RequestFormsComponent } from './modules/request-forms/request-forms.component';
import { LoginComponent } from './modules/login/login.component';
import { LoginFormComponent } from './modules/login/login-form/login-form.component';
import { LoginBackgroundComponent } from './modules/login/login-background/loginBackground.component';
import { NavigationIconHoverDirective } from './shared/directives/navigation-icon-hover.directive';
import { MeAssignedRequestsComponent } from './modules/dashboard/me-assigned-requests/me-assigned-requests.component';
import { FileUploadComponent } from './shared/components/file-upload/file-upload.component';
import { UserGroupManagementComponent } from './modules/app-management/user-group-management/user-group-management.component';
import { AuthenticationService } from './core/services/authentication.service';
import { UserService } from './core/services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    LoginFormComponent,
    LoginBackgroundComponent,
    NavigationComponent,
    HeaderComponent,
    ChartComponent,
    UnauthorizedPopUpComponent,
    DashboardComponent,
    MyOpenRequestsComponent,
    TeamOpenRequestsComponent,
    TeamAssignedRequestsComponent,
    OtherOpenRequestsComponent,
    UserProfileComponent,
    UserDetailsComponent,
    UserPrivilegesComponent,
    UserGroupsComponent,
    GroupDetailsComponent,
    GroupPrivilegesComponent,
    RequestTicketFormComponent,
    RequestReportFormComponent,
    RequestFinanceFormComponent,
    RequestClosedComponent,
    CommentComponent,
    SideInformationsComponent,
    RequestDetailsComponent,
    AppManagementComponent,
    RegisterUserComponent,
    RegisterGroupComponent,
    RequestFormsComponent,
    LoginComponent,
    NavigationIconHoverDirective,
    MeAssignedRequestsComponent,
    FileUploadComponent,
    UserGroupManagementComponent
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
    SweetAlert2Module.forRoot()
  ],
  providers: [
    AuthenticationService,
    UserService,
    { provide: HTTP_INTERCEPTORS,  useClass: AuthInterceptor, multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
