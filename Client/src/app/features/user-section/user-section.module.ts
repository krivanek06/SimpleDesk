import {NgModule} from '@angular/core';
import {ImagePresentationComponent} from "./view/profile/presentation/image-presentation/image-presentation.component";
import {UserProfileComponent} from "./view/profile/container/user-profile/user-profile.component";
import {RouterModule, Routes} from "@angular/router";
import {MaterialModule} from "../../material.module";
import {IconSpriteModule} from "ng-svg-icon-sprite";
import {SweetAlert2Module} from "@sweetalert2/ngx-sweetalert2";
import {SharedModule} from "../../shared/shared.module";
import {AuthGuard} from "../../core/guards/Auth.guard";
import {DatePipe} from "@angular/common";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthInterceptor} from "../../core/interceptors/AuthInterceptor ";
import {ErrorInterceptor} from "../../core/interceptors/ErrorInterceptor";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {UserStatEffets} from "./store/user/user-stat.effets.";
import {FlatpickrModule} from 'angularx-flatpickr';
import {UserCalendarComponent} from './view/profile/container/user-calendar/user-calendar.component';
import {CalendarModule, DateAdapter} from "angular-calendar";
import {adapterFactory} from "angular-calendar/date-adapters/date-fns";
import {ProfileComponent} from './view/profile/profile.component';
import {CalendarComponent} from './view/profile/presentation/calendar/calendar.component';
import { CalendarEventFormComponent } from './view/profile/presentation/calendar-event-form/calendar-event-form.component';
import { CalendarEventDetailsComponent } from './view/profile/presentation/calendar-event-details/calendar-event-details.component';

import * as userStatReducer from "./store/user/user-stat.reducer";
import * as fromReminder from "./store/reminder/reminder.reducer";
import {ReminderEffects} from "./store/reminder/reminder.effects";
import { CalendarEventDateRangeComponent } from './view/profile/presentation/calendar-event-date-range/calendar-event-date-range.component';

export const routes: Routes = [
  {
    path: '', component: ProfileComponent, canActivate: [AuthGuard],
    children: [
      {path: '', component: UserProfileComponent, pathMatch: 'full'},
      {path: 'profile' , component: UserProfileComponent},
      {path: 'calendar', component: UserCalendarComponent},
      {path: '**', redirectTo: 'profile'}
    ]
  }
];

export const reducers = {
  userStat: userStatReducer.reducer,
  reminderState: fromReminder.reducer,
};


@NgModule({
  declarations: [
    ImagePresentationComponent,
    UserProfileComponent,
    UserCalendarComponent,
    ProfileComponent,
    CalendarComponent,
    CalendarEventFormComponent,
    CalendarEventDetailsComponent,
    CalendarEventDateRangeComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    MaterialModule,
    IconSpriteModule,
    SweetAlert2Module.forRoot(),
    SharedModule,
    StoreModule.forFeature('userSection', reducers),
    EffectsModule.forFeature([UserStatEffets, ReminderEffects]),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    FlatpickrModule.forRoot(),
  ],
  exports: [
    RouterModule,
  ],
  providers: [
    DatePipe,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
  ]
})
export class UserSectionModule {
}
