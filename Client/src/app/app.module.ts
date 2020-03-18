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
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

// custom features
import {ParticlesModule} from "angular-particle";
import {LoginComponent} from "./features/login/login.component";
import {ReactiveFormsModule} from "@angular/forms";
import {SweetAlert2Module} from "@sweetalert2/ngx-sweetalert2";
import {DotLoaderComponent} from "./features/login/dot-loader/dot-loader.component";
import {MaterialModule} from "./material.module";
import {AuthInterceptor} from "./core/interceptors/AuthInterceptor ";
import {ErrorInterceptor} from "./core/interceptors/ErrorInterceptor";
import {stompConfig} from "./core/config/stompConfig";
import {InjectableRxStompConfig, RxStompService, rxStompServiceFactory} from "@stomp/ng2-stompjs";
import {StoreModule} from "@ngrx/store";
import {environment} from "../environments/environment";
import {EffectsModule} from "@ngrx/effects";
import {routerReducer, RouterStateSerializer, StoreRouterConnectingModule} from '@ngrx/router-store';
import {RouterCustomSerializer} from "./shared/utils/router.serializer";

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

    StoreModule.forRoot({
      router: routerReducer
    }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    StoreRouterConnectingModule.forRoot({stateKey: 'router'}),
  ],
  providers: [
    DatePipe,
    {provide: RouterStateSerializer, useClass: RouterCustomSerializer},
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
