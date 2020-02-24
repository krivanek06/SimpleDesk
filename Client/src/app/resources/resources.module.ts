import {NgModule} from '@angular/core';
import {GroupDetailsComponent} from "./group/view/group-details/group-details.component";
import {PrivilegesComponent} from "./privilege/view/privileges/privileges.component";
import {RequestFilterComponent} from "./request/view/request-filter/request-filter.component";
import {RequestTableComponent} from "./request/view/request-table/request-table.component";
import {UserDetailsComponent} from "./user/views/user-details/user-details.component";
import {UserGroupsComponent} from "./user/views/user-groups/user-groups.component";
import {MaterialModule} from "../material.module";
import {IconSpriteModule} from "ng-svg-icon-sprite";
import {AlertModule} from "ngx-bootstrap";
import {SharedModule} from "../shared/shared.module";
import {MatTableExporterModule} from "mat-table-exporter";
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE, SatDatepickerModule, SatNativeDateModule
} from 'saturn-datepicker';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DatePipe} from "@angular/common";
import {NavigationComponent} from "./navigation/navigation.component";
import {HeaderComponent} from "./header/header.component";


@NgModule({
  declarations: [
    GroupDetailsComponent,
    PrivilegesComponent,
    RequestFilterComponent,
    RequestTableComponent,
    UserDetailsComponent,
    UserGroupsComponent,
    NavigationComponent,
    HeaderComponent,
  ],
  imports: [
    IconSpriteModule,
    AlertModule.forRoot(),
    SatNativeDateModule,
    SatDatepickerModule,
    SharedModule,
    MatTableExporterModule,
  ],
  exports: [
    GroupDetailsComponent,
    PrivilegesComponent,
    RequestFilterComponent,
    RequestTableComponent,
    UserDetailsComponent,
    UserGroupsComponent,
    NavigationComponent,
    HeaderComponent,

    SatNativeDateModule,
    SatDatepickerModule,
    MaterialModule,
    IconSpriteModule,
    AlertModule
  ],
  providers: [
    DatePipe,
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ]
})
export class ResourcesModule {
}
