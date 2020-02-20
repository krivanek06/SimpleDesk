import { NgModule } from '@angular/core';
import {RequestClosedComponent} from "./request-closed.component";
import {RouterModule, Routes} from "@angular/router";
import {MaterialModule} from "../../material.module";
import {IconSpriteModule} from "ng-svg-icon-sprite";
import {AlertModule} from "ngx-bootstrap";
import {SweetAlert2Module} from "@sweetalert2/ngx-sweetalert2";
import {SharedModule} from "../../shared/shared.module";
import {AuthGuard} from "../../core/guards/AuthGuard";
import {ResourcesModule} from "../../resources/resources.module";
import {MatTableExporterModule} from "mat-table-exporter";

export const routes: Routes = [
  {
    path: '', component: RequestClosedComponent, canActivate: [AuthGuard],
  }
];

@NgModule({
  declarations: [
    RequestClosedComponent
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
export class RequestClosedModule { }
