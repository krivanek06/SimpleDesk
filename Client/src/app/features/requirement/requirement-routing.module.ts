import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RequestClosedComponent} from "./request-closed/request-closed.component";
import {AuthGuard} from "../../core/guards/AuthGuard";
import {DashboardComponent} from "./request-open/dashboard.component";
import {RequestDetailsComponent} from "./request-details/request-details.component";
import {RequestFormsComponent} from "./request-forms/request-forms.component";
import {TicketFormPageComponent} from "./request-forms/view/ticket-form-page/ticket-form-page.component";
import {ReportFormPageComponent} from "./request-forms/view/report-form-page/report-form-page.component";
import {FinanceFormPageComponent} from "./request-forms/view/finance-form-page/finance-form-page.component";
import {FinanceGuardGuard} from "./request-forms/guard/finance-guard.guard";


const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {
    path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard],
  },
  {
    path: 'request_closed', component: RequestClosedComponent, canActivate: [AuthGuard],
  },
  {
    path: 'request_details', component: RequestDetailsComponent, canActivate: [AuthGuard],
  },
  {
    path: 'request_new', component: RequestFormsComponent, canActivate: [AuthGuard],
    children: [
      {path: '', component: TicketFormPageComponent, pathMatch: 'full'},
      {path: 'ticket', component: TicketFormPageComponent},
      {path: 'report', component: ReportFormPageComponent},
      {path: 'finance', component: FinanceFormPageComponent, canActivate: [FinanceGuardGuard]},
      {path: '**', redirectTo: 'ticket'}
    ]
  },
  {path: '**', redirectTo: 'dashboard'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequirementRoutingModule { }
