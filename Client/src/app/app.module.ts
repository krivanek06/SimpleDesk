import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {IconSpriteModule} from 'ng-svg-icon-sprite';
import {CommonModule, DatePipe} from '@angular/common';
import {RouterModule} from '@angular/router';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {ParticlesModule} from "angular-particle";
import {LoginComponent} from "./core/components/login/login.component";
import {ReactiveFormsModule} from "@angular/forms";
import {SweetAlert2Module} from "@sweetalert2/ngx-sweetalert2";
import {MaterialModule} from "./material.module";
import {AuthInterceptor} from "./core/interceptors/AuthInterceptor ";
import {ErrorInterceptor} from "./core/interceptors/ErrorInterceptor";
import {stompConfig} from "./core/config/stompConfig";
import {InjectableRxStompConfig, RxStompService, rxStompServiceFactory} from "@stomp/ng2-stompjs";
import {State, StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {routerReducer, RouterStateSerializer, StoreRouterConnectingModule} from '@ngrx/router-store';
import {RouterCustomSerializer} from "./shared/utils/router.serializer";
import {NgxSpinnerModule} from "ngx-spinner";
import {AuthEffects} from "./core/store/auth/auth.effects";
import {UserEffects} from "./core/store/user/user.effets";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {environment} from "../environments/environment.prod";
import {ServiceWorkerModule} from '@angular/service-worker';

import * as LoadingReducer from './core/store/loading/loader.reducer';
import * as AuthReducer from './core/store/auth/auth.reducer';
import * as UserReducer from './core/store/user/user.reducer';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ParticlesModule,
    IconSpriteModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SweetAlert2Module,
    RouterModule,
    NgxSpinnerModule,
    NgbModule,
    StoreModule.forRoot({
      router: routerReducer,
      loader: LoadingReducer.reducer,
      auth: AuthReducer.reducer,
      user: UserReducer.reducer
    }),
    EffectsModule.forRoot([
      AuthEffects, UserEffects
    ]),
    StoreDevtoolsModule.instrument({
      maxAge: 2, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      features: {
        pause: false,
        lock: true,
        persist: true
      }
    }),
    StoreRouterConnectingModule.forRoot({stateKey: 'router'}),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      registrationStrategy: 'registerImmediately'
    }),
  ],
  providers: [
    DatePipe,
    {provide: RouterStateSerializer, useClass: RouterCustomSerializer},
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {provide: InjectableRxStompConfig, useValue: stompConfig},
    {provide: RxStompService, useFactory: rxStompServiceFactory, deps: [InjectableRxStompConfig]},
    {provide: State, useValue: null}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
