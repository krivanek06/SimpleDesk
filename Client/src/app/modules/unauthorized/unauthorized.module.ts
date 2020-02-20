import { NgModule } from '@angular/core';
import {UnauthorizedComponent} from "./unauthorized.component";
import {RouterModule, Routes} from "@angular/router";
import {AuthGuard} from "../../core/guards/AuthGuard";
import {SharedModule} from "../../shared/shared.module";

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
  ]
})
export class UnauthorizedModule { }
