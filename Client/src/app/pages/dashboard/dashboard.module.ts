import {NgModule} from '@angular/core';
import {DashboardComponent} from "./dashboard.component";
import {RouterModule, Routes} from "@angular/router";
import {MaterialModule} from "../../material.module";
import {IconSpriteModule} from "ng-svg-icon-sprite";
import {AlertModule} from "ngx-bootstrap";
import {SharedModule} from "../../shared/shared.module";
import {AuthGuard} from "../../core/guards/AuthGuard";
import {ResourcesModule} from "../../resources/resources.module";
import {DatePipe} from "@angular/common";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthInterceptor} from "../../core/interceptors/AuthInterceptor ";
import {ErrorInterceptor} from "../../core/interceptors/ErrorInterceptor";
//import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

export const routes: Routes = [
  {
    path: '', component: DashboardComponent, canActivate: [AuthGuard],
  }
];

//const config: SocketIoConfig = { url: 'http://localhost:8082', options: {} };

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    MaterialModule,
    IconSpriteModule,
    AlertModule.forRoot(),
    SharedModule,
    ResourcesModule,
    //SocketIoModule.forRoot(config),
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
export class DashboardModule {
}
