import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuard} from './core/guards/AuthGuard';
import {LoginComponent} from "./modules/login/login.component";
import {LoginGuardGuard} from "./modules/login/guard/login-guard.guard";


const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  // {path: 'login', component: LoginComponent, canActivate: [LoginGuardGuard]},
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then(mod => mod.LoginModule),
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(mod => mod.DashboardModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'request_new',
    loadChildren: () => import('./modules/request-forms/request-forms.module').then(mod => mod.RequestFormsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'request_closed',
    loadChildren: () => import('./modules/request-closed/request-closed.module').then(mod => mod.RequestClosedModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'request_details/:id',
    loadChildren: () => import('./modules/request-details/request-details.module').then(mod => mod.RequestDetailsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'user_profile',
    loadChildren: () => import('./modules/user-profile/user-profile.module').then(mod => mod.UserProfileModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'app_management',
    loadChildren: () => import('./modules/app-management/app-management.module').then(mod => mod.AppManagementModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'unauthorized',
    loadChildren: () => import('./modules/unauthorized/unauthorized.module').then(mod => mod.UnauthorizedModule),
    canActivate: [AuthGuard]
  },
  {path: '**', redirectTo: 'dashboard'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top',
    enableTracing: false, // Turn this on to log routing events to the console
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

