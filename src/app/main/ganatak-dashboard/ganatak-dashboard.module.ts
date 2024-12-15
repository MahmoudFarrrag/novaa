import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule, Routes } from '@angular/router';
const routes:Routes = [
  {path:'counselors'
    ,loadChildren:()=>import('./counselors/counselors.module').then(m=>m.CounselorsModule)
  },
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class GanatakDashboardModule { }

