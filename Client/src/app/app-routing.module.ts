import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {AuthGuard} from './core/guards/Auth.guard';
import {LoginComponent} from "./core/components/login/login.component";


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {
    path: 'requests',
    loadChildren: () => import('./features/requirement/requirement.module').then(mod => mod.RequirementModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'user_profile',
    loadChildren: () => import('./features/user-section/user-section.module').then(mod => mod.UserSectionModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'app_management',
    loadChildren: () => import('./features/app-management/app-management.module').then(mod => mod.AppManagementModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'unauthorized',
    loadChildren: () => import('./features/unauthorized/unauthorized.module').then(mod => mod.UnauthorizedModule),
    canActivate: [AuthGuard]
  },
  {path: '**', redirectTo: 'requests'}
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

