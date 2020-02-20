import {NgModule} from '@angular/core';
import {DashboardComponent} from "./dashboard.component";
import {RouterModule, Routes} from "@angular/router";
import {MaterialModule} from "../../material.module";
import {IconSpriteModule} from "ng-svg-icon-sprite";
import {AlertModule} from "ngx-bootstrap";
import {SweetAlert2Module} from "@sweetalert2/ngx-sweetalert2";
import {SharedModule} from "../../shared/shared.module";
import {AuthGuard} from "../../core/guards/AuthGuard";
import {ResourcesModule} from "../../resources/resources.module";

export const routes: Routes = [
  {
    path: '', component: DashboardComponent, canActivate: [AuthGuard],
  }
];


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    MaterialModule,
    IconSpriteModule,
    AlertModule.forRoot(),
    SweetAlert2Module.forRoot(),
    SharedModule,
    ResourcesModule,
  ],
  exports: [
    RouterModule,
  ]
})
export class DashboardModule {
}
