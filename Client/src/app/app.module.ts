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
import { IgxExcelExporterService } from "igniteui-angular";

// custom interceptors
import { AuthInterceptor } from './core/interceptors/AuthInterceptor ';
import { ErrorInterceptor } from './core/interceptors/ErrorInterceptor';

// custom components
import { NavigationComponent } from './core/components/navigation/navigation.component';
import { HeaderComponent } from './core/components/header/header.component';
import { ChartComponent } from './shared/components/chart/chart.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { UserProfileComponent } from './modules/user-profile/user-profile.component';
import { UserDetailsComponent } from './resources/user/views/user-details/user-details.component';
import { PrivilegesComponent } from './resources/privilege/view/privileges/privileges.component';
import { UserGroupsComponent } from './resources/user/views/user-groups/user-groups.component';
import { GroupDetailsComponent } from './resources/group/view/group-details/group-details.component';
import { RequestTicketFormComponent } from './resources/request/view/form/request-ticket-form/request-ticket-form.component';
import { RequestReportFormComponent } from './resources/request/view/form/request-report-form/request-report-form.component';
import { RequestFinanceFormComponent } from './resources/request/view/form/request-finance-form/request-finance-form.component';
import { RequestClosedComponent } from './modules/request-closed/request-closed.component';
import { RequestDetailsComponent } from './modules/request-details/request-details.component';
import { AppManagementComponent } from './modules/app-management/app-management.component';
import { UserFormComponent } from './resources/user/views/user-form/user-form.component';
import { GroupFormComponent } from './resources/group/view/group-form/group-form.component';
import { RequestFormsComponent } from './modules/request-forms/request-forms.component';
import { LoginComponent } from './modules/login/login.component';
import { LoginFormComponent } from './modules/login/login-form/login-form.component';
import { LoginBackgroundComponent } from './modules/login/login-background/loginBackground.component';
import { NavigationIconHoverDirective } from './shared/directives/navigation-icon-hover.directive';
import { FileUploadComponent } from './shared/components/file-upload/file-upload.component';
import { GroupManagementComponent } from './modules/app-management/container/group-management/group-management.component';
import { AuthenticationService } from './core/services/authentication.service';
import { UserStoreService } from './core/services/user-store.service';
import { RequestTableComponent } from './shared/components/request-table/request-table.component';
import { FileServiceService } from './core/services/file-service.service';
import { UserImagesComponent } from './resources/user/views/user-images/user-images.component';
import { RequestSideInformationComponent } from './modules/request-details/container/request-side-information/request-side-information.component';
import { RequestManagementContainerComponent } from './modules/request-details/container/request-management-container/request-management-container.component';
import { RequestFilterComponent } from './shared/components/request-filter/request-filter.component';
import { UnauthorizedComponent } from './modules/unauthorized/unauthorized.component';
import { DotLoaderComponent } from './shared/components/dot-loader/dot-loader.component';
import { SERDButtonsComponent } from './shared/components/serdbuttons/serdbuttons.component';
import { RequestCommentFormComponent } from './resources/request-comment/request-comment-form/request-comment-form.component';
import { UserManagementButtonsComponent } from './resources/user/views/user-management-buttons/user-management-buttons.component';
import { UserManagementComponent } from './modules/app-management/container/user-management/user-management.component';
import { UserGroupManagementComponent  } from './modules/app-management/views/user-group-management/user-group-management.component';
import { GroupFormDetailsComponent } from './resources/group/view/group-form-details/group-form-details.component';
import { GroupRegistrationComponent  } from './modules/app-management/views/group-registration/group-registration.component';
import { UserRegistrationComponent } from './modules/app-management/views/user-registration/user-registration.component';
import { RequestCommentBodyComponent } from './resources/request-comment/request-comment-body/request-comment-body.component';
import { RequestCommentSharingComponent } from './resources/request-comment/request-comment-sharing/request-comment-sharing.component';
import { RequestCommentOptionsComponent } from './resources/request-comment/request-comment-options/request-comment-options.component';
import { RequestManagementComponent } from './resources/request/view/detial/request-management/request-management.component';
import { RequestContentComponent } from './resources/request/view/detial/request-content/request-content.component';
import { RequestCommentContainerComponent } from './modules/request-details/container/request-comment-container/request-comment-container.component';

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
    RequestSideInformationComponent,
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
    RequestCommentContainerComponent
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
    UserStoreService,
    FileServiceService,
    IgxExcelExporterService ,
    { provide: HTTP_INTERCEPTORS,  useClass: AuthInterceptor, multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
