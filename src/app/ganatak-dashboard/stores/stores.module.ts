import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListStoresComponent } from './list-stores/list-stores.component';
import { AddStoresComponent } from './add-stores/add-stores.component';

const routes = [
  {
    path: '',
    component: ListStoresComponent
  },
  {
    path: 'add',
    component: AddStoresComponent
  },
  {
    path: 'edit/:id',
    component: AddStoresComponent
  }
  
]

@NgModule({
  declarations: [
    ListStoresComponent,
    AddStoresComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StoresModule { }
