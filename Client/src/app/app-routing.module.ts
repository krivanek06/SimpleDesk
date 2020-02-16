import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {AuthGuard} from './core/guards/AuthGuard';
import {RequestFormsComponent} from './pages/request-forms/request-forms.component';
import {UserProfileComponent} from './pages/user-profile/user-profile.component';
import {RequestClosedComponent} from './pages/request-closed/request-closed.component';
import {AppManagementComponent} from './pages/app-management/app-management.component';
import {RequestDetailsComponent} from './pages/request-details/request-details.component';
import {FinanceGuardGuard} from './core/guards/finance-guard.guard';
import {PrivilegeManagerGuard} from './core/guards/privilege-manager.guard';
import {UnauthorizedComponent} from './pages/unauthorized/unauthorized.component';
import {UserGroupManagementComponent} from './pages/app-management/views/user-group-management/user-group-management.component';
import {UserRegistrationComponent} from './pages/app-management/views/user-registration/user-registration.component';
import {GroupRegistrationComponent} from './pages/app-management/views/group-registration/group-registration.component';
import {TicketFormPageComponent} from "./pages/request-forms/view/ticket-form-page/ticket-form-page.component";
import {ReportFormPageComponent} from "./pages/request-forms/view/report-form-page/report-form-page.component";
import {FinanceFormPageComponent} from "./pages/request-forms/view/finance-form-page/finance-form-page.component";
import {LoginGuardGuard} from "./core/guards/login-guard.guard";


const routes: Routes = [
  {path: 'login', component: LoginComponent, canActivate: [LoginGuardGuard]},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {
    path: 'request_new', component: RequestFormsComponent, canActivate: [AuthGuard],
    children: [
      {path: 'ticket', component: TicketFormPageComponent},
      {path: 'report', component: ReportFormPageComponent},
      {path: 'finance', component: FinanceFormPageComponent, canActivate: [FinanceGuardGuard]},
      {path: '**', redirectTo: 'ticket'}
    ]
  },
  {path: 'request_closed', component: RequestClosedComponent, canActivate: [AuthGuard]},
  {path: 'request_details/:id', component: RequestDetailsComponent, canActivate: [AuthGuard]},
  {path: 'user_profile', component: UserProfileComponent, canActivate: [AuthGuard]},
  {
    path: 'app_management', component: AppManagementComponent, canActivate: [AuthGuard, PrivilegeManagerGuard],
    children: [
      {path: '', component: UserGroupManagementComponent, canActivate: [AuthGuard]},
      {path: 'register_user', component: UserRegistrationComponent, canActivate: [AuthGuard]},
      {path: 'register_group', component: GroupRegistrationComponent, canActivate: [AuthGuard]},
      {path: '**', redirectTo: ''}
    ]
  },
  {path: 'unauthorized', component: UnauthorizedComponent, canActivate: [AuthGuard]},
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: '**', redirectTo: 'dashboard'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routingComponents = [LoginComponent];
