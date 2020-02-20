import { NgModule } from '@angular/core';
import {LoginComponent} from "./login.component";
import {ParticlesModule} from "angular-particle";
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";
import {LoginGuardGuard} from "./guard/login-guard.guard";

export const routes: Routes = [
  {
    path: '', component: LoginComponent, canActivate: [LoginGuardGuard],
  }
];


@NgModule({
  declarations: [
    LoginComponent

  ],
  imports: [
    ParticlesModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [
    RouterModule,
  ]
})
export class LoginModule { }
