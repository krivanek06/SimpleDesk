import {NgModule} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import {FileUploadComponent} from "./components/file-upload/file-upload.component";
import {SERDButtonsComponent} from "./components/serdbuttons/serdbuttons.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {SweetAlert2Module} from "@sweetalert2/ngx-sweetalert2";
import {NgxSpinnerModule} from "ngx-spinner";
import {MaterialModule} from "../material.module";
import {RouterModule} from "@angular/router";
import {GroupDetailsComponent} from "./components/group-details/group-details.component";
import {PrivilegesComponent} from "./components/privileges/privileges.component";
import {UserDetailsComponent} from "./components/user-details/user-details.component";
import {UserGroupsComponent} from "./components/user-groups/user-groups.component";
import {NavigationComponent} from "./components-smart/navigation/navigation.component";
import {HeaderComponent} from "./components-smart/header/header.component";
import {IconSpriteModule} from "ng-svg-icon-sprite";
import {
  NGX_MAT_DATE_FORMATS,
  NgxMatDatetimePickerModule, NgxMatNativeDateModule,
  NgxMatTimepickerModule
} from '@angular-material-components/datetime-picker';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
  SatDatepickerModule,
  SatNativeDateModule
} from "saturn-datepicker";
import {MomentDateAdapter} from "@angular/material-moment-adapter";
import {LazyLoadImageModule} from "ng-lazyload-image";
import {RequestMonthlyChartComponent} from './components/request-monthly-chart/request-monthly-chart.component';
import {ChartsModule} from 'ng2-charts';
import {UnauthorizedComponent} from "./components/unauthorized/unauthorized.component";
import {DotLoaderComponent} from "./components/dot-loader/dot-loader.component";


export interface SatDatepickerRangeValue<D> {
  begin: D | null;
  end: D | null;
}

export const DD_MM_YYYY_Format = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'DD.MM.YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};


@NgModule({
  declarations: [
    UnauthorizedComponent,
    FileUploadComponent,
    SERDButtonsComponent,
    GroupDetailsComponent,
    PrivilegesComponent,
    UserDetailsComponent,
    UserGroupsComponent,
    HeaderComponent,
    DotLoaderComponent,
    NavigationComponent,
    RequestMonthlyChartComponent
  ],
  imports: [
    IconSpriteModule,
    SatNativeDateModule,
    SatDatepickerModule,
    ReactiveFormsModule,
    RouterModule,
    LazyLoadImageModule,
    ChartsModule,
    CommonModule,
    FormsModule,
    MaterialModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    NgxMatNativeDateModule,
    SweetAlert2Module.forRoot(),

  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    SweetAlert2Module,
    NgxSpinnerModule,
    MaterialModule,
    FormsModule,
    RouterModule,
    SatNativeDateModule,
    SatDatepickerModule,
    IconSpriteModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    NgxMatNativeDateModule,

    LazyLoadImageModule,
    ChartsModule,
    UnauthorizedComponent,
    FileUploadComponent,
    SERDButtonsComponent,
    GroupDetailsComponent,
    PrivilegesComponent,
    DotLoaderComponent,
    UserDetailsComponent,
    UserGroupsComponent,
    HeaderComponent,
    NavigationComponent,
    RequestMonthlyChartComponent
  ],
  providers: [
    DatePipe,
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: DD_MM_YYYY_Format},
    {provide: NGX_MAT_DATE_FORMATS, useValue: DD_MM_YYYY_Format}
  ]
})
export class SharedModule {
}
