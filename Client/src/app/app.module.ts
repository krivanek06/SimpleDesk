import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParticlesModule } from 'angular-particle';
import { LoginFormComponent } from './modules/login/login-form/login-form.component';
import { AlertModule } from 'ngx-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DashboardBackgroundComponent } from './modules/dashboard/dashboard-background/dashboard-background.component'; // bootstrap
import { AuthenticationService } from './core/services/authentication/Authentication.service';
import { AuthInterceptor } from './core/interceptors/AuthInterceptor ';
import { ErrorInterceptor } from './core/interceptors/ErrorInterceptor';
import { LogoutComponent } from './modules/login/logout/logout.component';
import { NavigationBackgroundComponent } from './modules/navigation/navigation-background/navigation-background.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// material
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule } from '@angular/material';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { IconSpriteModule } from 'ng-svg-icon-sprite';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    LoginFormComponent,
    DashboardBackgroundComponent,
    LogoutComponent,
    NavigationBackgroundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ParticlesModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IconSpriteModule,
    AlertModule.forRoot(),
    BrowserAnimationsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AngularSvgIconModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS,  useClass: AuthInterceptor, multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
