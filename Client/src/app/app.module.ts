import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { HTTP_INTERCEPTORS} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AlertModule} from 'ngx-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {IconSpriteModule} from 'ng-svg-icon-sprite';
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';
import {DatePipe} from '@angular/common';
import {NgxSpinnerModule} from "ngx-spinner";
import {RouterModule} from '@angular/router';
import {SidebarModule} from 'ng-sidebar';
import {
  SatNativeDateModule,
  SatDatepickerModule,
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE
} from 'saturn-datepicker';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import {MatTableExporterModule} from 'mat-table-exporter';

// custom interceptors
import {AuthInterceptor} from './core/interceptors/AuthInterceptor ';
import {ErrorInterceptor} from './core/interceptors/ErrorInterceptor';

// custom components
import {AuthenticationService} from './core/services/authentication.service';
import {UserStoreService} from './core/services/user-store.service';
import {FileServiceService} from './core/services/file-service.service';
import {SharedModule} from "./shared/shared.module";
import {LoginComponent} from "./modules/login/login.component";
import {ParticlesModule} from "angular-particle";
import {RequestStoreService} from "./core/services/request-store.service";
import {RequestService} from "./core/services/request.service";

@NgModule({
  declarations: [
    AppComponent,
   // LoginComponent
  ],
  imports: [
    BrowserModule,
 //   ParticlesModule,
 //   ReactiveFormsModule,
    AppRoutingModule,
    IconSpriteModule,
    AlertModule.forRoot(),
    BrowserAnimationsModule,
  //  SweetAlert2Module.forRoot(),
  //  NgxSpinnerModule,
    RouterModule,
    SharedModule
  ],
  providers: [
    DatePipe,
    AuthenticationService,
    RequestService,
    UserStoreService,
    RequestStoreService,
    FileServiceService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
