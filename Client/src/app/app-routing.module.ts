import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { AuthGuard } from './core/guards/AuthGuard';
import { RequestFormsComponent } from './modules/request-forms/request-forms.component';
import { RequestTicketFormComponent } from './resources/request/view/form/request-ticket-form/request-ticket-form.component';
import { RequestReportFormComponent } from './resources/request/view/form/request-report-form/request-report-form.component';
import { RequestFinanceFormComponent } from './resources/request/view/form/request-finance-form/request-finance-form.component';
import { UserProfileComponent } from './modules/user-profile/user-profile.component';
import { RequestClosedComponent } from './modules/request-closed/request-closed.component';
import { AppManagementComponent } from './modules/app-management/app-management.component';
import { RequestDetailsComponent } from './modules/request-details/request-details.component';
import { FinanceGuardGuard } from './core/guards/finance-guard.guard';
import { PrivilegeManagerGuard } from './core/guards/privilege-manager.guard';
import { UnauthorizedComponent } from './modules/unauthorized/unauthorized.component';
import { UserGroupManagementComponent } from './modules/app-management/views/user-group-management/user-group-management.component';
import { UserRegistrationComponent } from './modules/app-management/views/user-registration/user-registration.component';
import { GroupRegistrationComponent } from './modules/app-management/views/group-registration/group-registration.component';


const routes: Routes = [
  { path: 'login' , component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  { path: 'request_new', component: RequestFormsComponent, canActivate:[AuthGuard],
    children : [
        { path: 'ticket' , component: RequestTicketFormComponent },
        { path: 'report' , component: RequestReportFormComponent },
        { path: 'finance' , component: RequestFinanceFormComponent, canActivate:[ FinanceGuardGuard] },
        { path: '**' ,  redirectTo: 'ticket'  }
    ]},
  { path: 'request_closed', component: RequestClosedComponent, canActivate:[AuthGuard]}, 
  { path: 'request_details/:id', component: RequestDetailsComponent, canActivate:[AuthGuard]},
  { path: 'user_profile', component: UserProfileComponent, canActivate:[AuthGuard]} ,
  { path: 'app_management', component: AppManagementComponent, canActivate:[AuthGuard, PrivilegeManagerGuard],
      children:[
        { path: '', component: UserGroupManagementComponent, canActivate:[AuthGuard]},
        { path: 'register_user', component: UserRegistrationComponent, canActivate:[AuthGuard]},
        { path: 'register_group', component: GroupRegistrationComponent, canActivate:[AuthGuard]},
        { path: '**' ,  redirectTo: ''  }
    ]},
  { path: 'unauthorized' , component: UnauthorizedComponent, canActivate:[AuthGuard] },
  { path: '', redirectTo: 'dashboard' , pathMatch: 'full'},
  { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent];
