import { NgModule } from '@angular/core';
import {UnauthorizedComponent} from "./unauthorized.component";
import {RouterModule, Routes} from "@angular/router";
import {AuthGuard} from "../../core/guards/AuthGuard";
import {SharedModule} from "../../shared/shared.module";
import {DatePipe} from "@angular/common";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthInterceptor} from "../../core/interceptors/AuthInterceptor ";
import {ErrorInterceptor} from "../../core/interceptors/ErrorInterceptor";

export const routes: Routes = [
  {
    path: '', component: UnauthorizedComponent, canActivate: [AuthGuard],
  }

];

@NgModule({
  declarations: [
    UnauthorizedComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
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
export class UnauthorizedModule { }
