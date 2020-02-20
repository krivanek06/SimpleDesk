import {RouterModule, Routes} from '@angular/router';
import {TicketFormPageComponent} from "./view/ticket-form-page/ticket-form-page.component";
import {ReportFormPageComponent} from "./view/report-form-page/report-form-page.component";
import {FinanceFormPageComponent} from "./view/finance-form-page/finance-form-page.component";
import {FinanceGuardGuard} from "./guard/finance-guard.guard";
import {NgModule} from "@angular/core";
import {RequestTicketFormComponent} from "./presentation/request-ticket-form/request-ticket-form.component";
import {RequestReportFormComponent} from "./presentation/request-report-form/request-report-form.component";
import {RequestFinanceFormComponent} from "./presentation/request-finance-form/request-finance-form.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {IconSpriteModule} from "ng-svg-icon-sprite";
import {AlertModule} from "ngx-bootstrap";
import {MaterialModule} from "../../material.module";
import {SweetAlert2Module} from "@sweetalert2/ngx-sweetalert2";
import {SharedModule} from "../../shared/shared.module";
import {RequestFormsComponent} from "./request-forms.component";
import {AuthGuard} from "../../core/guards/AuthGuard";
import {ResourcesModule} from "../../resources/resources.module";


export const routes: Routes = [
  {
    path: '', component: RequestFormsComponent, canActivate: [AuthGuard],
    children: [
      {path: '', component: TicketFormPageComponent, pathMatch: 'full'},
      {path: 'ticket', component: TicketFormPageComponent},
      {path: 'report', component: ReportFormPageComponent},
      {path: 'finance', component: FinanceFormPageComponent, canActivate: [FinanceGuardGuard]},
      {path: '**', redirectTo: 'ticket'}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    IconSpriteModule,
    AlertModule.forRoot(),
    SweetAlert2Module.forRoot(),
    SharedModule,
    ResourcesModule,
  ],
  declarations: [
    RequestFormsComponent,
    RequestTicketFormComponent,
    RequestReportFormComponent,
    RequestFinanceFormComponent,
    TicketFormPageComponent,
    ReportFormPageComponent,
    FinanceFormPageComponent,
  ],
  exports: [
    RouterModule,
  ]
})
export class RequestFormsModule {
}
