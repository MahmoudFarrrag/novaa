import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { BaseComponent } from './base/base.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';

import { ContentAnimateDirective } from '../../core/content-animate/content-animate.directive';

import { NgbDropdownModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

import { FeatherIconModule } from '../../core/feather-icon/feather-icon.module';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { UsersComponent } from './wajad/users/users.component';
import { AddStudentsComponent } from './addNewComponents/add-students/add-students.component';
import { ActivationCodesComponent } from './wajad/activation-codes/activation-codes.component';
import { AddDevicesComponent } from './addNewComponents/add-devices/add-devices.component';
import { AddCountriesComponent } from './addNewComponents/add-countries/add-countries.component';
import { AddOnbourdingsComponent } from './addNewComponents/add-onbourdings/add-onbourdings.component';
import { AddActivationCodesComponent } from './addNewComponents/add-activation-codes/add-activation-codes.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};


@NgModule({
  declarations: [BaseComponent, NavbarComponent, SidebarComponent, FooterComponent, ContentAnimateDirective, UsersComponent, AddStudentsComponent, ActivationCodesComponent, AddDevicesComponent, AddCountriesComponent, AddOnbourdingsComponent, AddActivationCodesComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgbDropdownModule,
    NgbCollapseModule, 
    PerfectScrollbarModule,
    FeatherIconModule
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class LayoutModule { }
