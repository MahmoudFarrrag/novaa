import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule, Routes } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdsComponent } from './wajad/ads/ads.component';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NgbCollapseModule, NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreCommonModule } from '@core/common.module';
import { AddAdsComponent } from './add-pages/add-ads/add-ads.component';
const routes:Routes = [
  {path:'counselors'
    ,loadChildren:()=>import('./counselors/counselors.module').then(m=>m.CounselorsModule)
  },
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule, 
    NgxDatatableModule,
    FormsModule,ReactiveFormsModule,
    BrowserModule,
    CommonModule,
    RouterModule.forChild(routes),
    CoreCommonModule,
    NgbModule,
    PerfectScrollbarModule,
    TranslateModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgbDropdownModule,
    NgbCollapseModule,
    PerfectScrollbarModule
   
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class GanatakDashboardModule { }

