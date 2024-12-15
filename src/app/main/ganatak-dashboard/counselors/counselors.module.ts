import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewCounselorsComponent } from './view-counselors/view-counselors.component';
import { AddCounselorsComponent } from './add-counselors/add-counselors.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
  {
    path:'',
    component:ViewCounselorsComponent
  },
  {
    path:'add',
    component:AddCounselorsComponent
  },
  {path:'edit/:id',component:AddCounselorsComponent}
]

@NgModule({
  declarations: [
    ViewCounselorsComponent,
    AddCounselorsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class 
CounselorsModule { }
