import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/login/loginBackground/loginBackground.component';
import { DashboardBackgroundComponent } from './modules/dashboard/dashboard-background/dashboard-background.component';
import { AuthGuard } from './core/guards/AuthGuard';


const routes: Routes = [
  {path: 'login' , component: LoginComponent},
  {path: 'dashboard', component: DashboardBackgroundComponent, canActivate:[AuthGuard]},
  { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
     // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent];
