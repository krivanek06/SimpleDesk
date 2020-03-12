import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AlertModule} from 'ngx-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {IconSpriteModule} from 'ng-svg-icon-sprite';
import {CommonModule, DatePipe} from '@angular/common';
import {RouterModule} from '@angular/router';

// custom pages
import {ParticlesModule} from "angular-particle";
import {LoginComponent} from "./pages/login/login.component";
import {ReactiveFormsModule} from "@angular/forms";
import {SweetAlert2Module} from "@sweetalert2/ngx-sweetalert2";
import {DotLoaderComponent} from "./pages/login/dot-loader/dot-loader.component";
import {MaterialModule} from "./material.module";
import {AuthInterceptor} from "./core/interceptors/AuthInterceptor ";
import {ErrorInterceptor} from "./core/interceptors/ErrorInterceptor";
import {stompConfig} from "./core/config/stompConfig";
import {InjectableRxStompConfig, RxStompService, rxStompServiceFactory } from "@stomp/ng2-stompjs";
import {HeaderComponent} from "./shared/components-smart/header/header.component";
import {NavigationComponent} from "./shared/components-smart/navigation/navigation.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DotLoaderComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ParticlesModule,
    IconSpriteModule,
    MaterialModule,
    AlertModule.forRoot(),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SweetAlert2Module,
    RouterModule,
  ],
  providers: [
    DatePipe,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {
      provide: InjectableRxStompConfig,
      useValue: stompConfig
    },
    {
      provide: RxStompService,
      useFactory: rxStompServiceFactory,
      deps: [InjectableRxStompConfig]
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
