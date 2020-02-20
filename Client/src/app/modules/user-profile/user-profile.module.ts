import {NgModule} from '@angular/core';
import {UserImagesComponent} from "./presentation/user-images/user-images.component";
import {UserProfileComponent} from "./user-profile.component";
import {RouterModule, Routes} from "@angular/router";
import {MaterialModule} from "../../material.module";
import {IconSpriteModule} from "ng-svg-icon-sprite";
import {AlertModule} from "ngx-bootstrap";
import {SweetAlert2Module} from "@sweetalert2/ngx-sweetalert2";
import {SharedModule} from "../../shared/shared.module";
import {AuthGuard} from "../../core/guards/AuthGuard";
import {ResourcesModule} from "../../resources/resources.module";

export const routes: Routes = [
  {
    path: '', component: UserProfileComponent, canActivate: [AuthGuard],
  }
];



@NgModule({
  declarations: [
    UserImagesComponent,
    UserProfileComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    MaterialModule,
    IconSpriteModule,
    AlertModule.forRoot(),
    SweetAlert2Module.forRoot(),
    SharedModule,
    ResourcesModule,
  ],
  exports: [
    RouterModule,
  ]
})
export class UserProfileModule {
}
