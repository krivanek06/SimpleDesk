import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { AuthGuard } from './core/guards/AuthGuard';
import { RequestFormsComponent } from './modules/request-forms/request-forms.component';
import { RequestTicketFormComponent } from './modules/request-forms/request-ticket-form/request-ticket-form.component';
import { RequestReportFormComponent } from './modules/request-forms/request-report-form/request-report-form.component';
import { RequestFinanceFormComponent } from './modules/request-forms/request-finance-form/request-finance-form.component';
import { UserProfileComponent } from './modules/user-profile/user-profile.component';
import { RequestClosedComponent } from './modules/request-closed/request-closed.component';
import { AppManagementComponent } from './modules/app-management/app-management.component';
import { RegisterUserComponent } from './modules/app-management/register-user/register-user.component';
import { RegisterGroupComponent } from './modules/app-management/register-group/register-group.component';
import { RequestDetailsComponent } from './modules/request-details/request-details.component';


const routes: Routes = [
  { path: 'login' , component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  { path: 'request_new', component: RequestFormsComponent, canActivate:[AuthGuard],
    children : [
        { path: 'ticket' , component: RequestTicketFormComponent },
        { path: 'report' , component: RequestReportFormComponent },
        { path: 'finance' , component: RequestFinanceFormComponent },
        { path: '**' ,  redirectTo: 'ticket'  }
    ]},
  { path: 'request_closed', component: RequestClosedComponent, canActivate:[AuthGuard]},
  { path: 'request_details/:id', component: RequestDetailsComponent, canActivate:[AuthGuard]},
  { path: 'user_profile', component: UserProfileComponent, canActivate:[AuthGuard]},
  { path: 'app_management', component: AppManagementComponent, canActivate:[AuthGuard],
      children:[
        { path: 'register_user', component: RegisterUserComponent, canActivate:[AuthGuard]},
        { path: 'register_group', component: RegisterGroupComponent, canActivate:[AuthGuard]},
    ]},
    
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
