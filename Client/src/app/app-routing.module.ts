import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {AuthGuard} from './core/guards/AuthGuard';
import {LoginComponent} from "./pages/login/login.component";
import {LoginGuardGuard} from "./pages/login/guard/login-guard.guard";


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent, canActivate: [LoginGuardGuard]},
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(mod => mod.DashboardModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'request_new',
    loadChildren: () => import('./pages/request-forms/request-forms.module').then(mod => mod.RequestFormsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'request_closed',
    loadChildren: () => import('./pages/request-closed/request-closed.module').then(mod => mod.RequestClosedModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'request_details/:id',
    loadChildren: () => import('./pages/request-details/request-details.module').then(mod => mod.RequestDetailsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'user_profile',
    loadChildren: () => import('./pages/user-profile/user-profile.module').then(mod => mod.UserProfileModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'app_management',
    loadChildren: () => import('./pages/app-management/app-management.module').then(mod => mod.AppManagementModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'unauthorized',
    loadChildren: () => import('./pages/unauthorized/unauthorized.module').then(mod => mod.UnauthorizedModule),
    canActivate: [AuthGuard]
  },
  {path: '**', redirectTo: 'dashboard'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top',
    preloadingStrategy: PreloadAllModules,
    enableTracing: false, // Turn this on to log routing events to the console
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

