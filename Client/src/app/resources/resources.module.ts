import { NgModule } from '@angular/core';
import {GroupDetailsComponent} from "./group/view/group-details/group-details.component";
import {PrivilegesComponent} from "./privilege/view/privileges/privileges.component";
import {RequestFilterComponent} from "./request/view/request-filter/request-filter.component";
import {RequestTableComponent} from "./request/view/request-table/request-table.component";
import {UserDetailsComponent} from "./user/views/user-details/user-details.component";
import {UserGroupsComponent} from "./user/views/user-groups/user-groups.component";
import {MaterialModule} from "../material.module";
import {IconSpriteModule} from "ng-svg-icon-sprite";
import {AlertModule} from "ngx-bootstrap";
import {SatDatepickerModule, SatNativeDateModule} from "saturn-datepicker";
import {SharedModule} from "../shared/shared.module";
import {MatTableExporterModule} from "mat-table-exporter";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    GroupDetailsComponent,
    PrivilegesComponent,
    RequestFilterComponent,
    RequestTableComponent,
    UserDetailsComponent,
    UserGroupsComponent,
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

    SatNativeDateModule,
    SatDatepickerModule,
    MaterialModule,
    IconSpriteModule,
    AlertModule
  ]
})
export class ResourcesModule { }
