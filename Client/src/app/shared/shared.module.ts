import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChartComponent} from "./components/chart/chart.component";
import {DotLoaderComponent} from "./components/dot-loader/dot-loader.component";
import {FileUploadComponent} from "./components/file-upload/file-upload.component";
import {SERDButtonsComponent} from "./components/serdbuttons/serdbuttons.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {NavigationComponent} from "./components/navigation/navigation.component";
import {HeaderComponent} from "./components/header/header.component";
import {SweetAlert2Module} from "@sweetalert2/ngx-sweetalert2";
import {NgxSpinnerModule} from "ngx-spinner";
import {MaterialModule} from "../material.module";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    ChartComponent,
    DotLoaderComponent,
    FileUploadComponent,
    SERDButtonsComponent,
    NavigationComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    SweetAlert2Module.forRoot(),
    RouterModule
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

    ChartComponent,
    DotLoaderComponent,
    FileUploadComponent,
    SERDButtonsComponent,
    NavigationComponent,
    HeaderComponent,
  ]
})
export class SharedModule {
}
