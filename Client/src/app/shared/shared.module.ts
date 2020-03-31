import {NgModule} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import {ChartComponent} from "./components/chart/chart.component";
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
import {AlertModule} from "ngx-bootstrap";
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
  SatDatepickerModule,
  SatNativeDateModule
} from "saturn-datepicker";
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from "@angular/material-moment-adapter";

@NgModule({
  declarations: [
    ChartComponent,
    FileUploadComponent,
    SERDButtonsComponent,
    GroupDetailsComponent,
    PrivilegesComponent,
    UserDetailsComponent,
    UserGroupsComponent,
    HeaderComponent,
    NavigationComponent
  ],
  imports: [
    IconSpriteModule,
    AlertModule.forRoot(),
    SatNativeDateModule,
    SatDatepickerModule,
    ReactiveFormsModule,
    RouterModule,

    CommonModule,
    FormsModule,
    MaterialModule,
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
    AlertModule,

    ChartComponent,
    FileUploadComponent,
    SERDButtonsComponent,
    GroupDetailsComponent,
    PrivilegesComponent,
    UserDetailsComponent,
    UserGroupsComponent,
    HeaderComponent,
    NavigationComponent
  ],
  providers: [
    DatePipe,
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ]
})
export class SharedModule {
}
