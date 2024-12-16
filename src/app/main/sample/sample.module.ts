import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { CoreCommonModule } from '@core/common.module';

import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';

import { SampleComponent } from './sample.component';
import { HomeComponent } from './home.component';
import { AdsComponent } from '../ganatak-dashboard/wajad/ads/ads.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AddAdsComponent } from '../ganatak-dashboard/add-pages/add-ads/add-ads.component';

const routes = [
  {
    path: 'sample',
    component: SampleComponent,
    data: { animation: 'sample' }
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { animation: 'home' }
  },
  {
    path: 'ads',
    component: AdsComponent,
    data: { animation: 'ads' }
  },
  {
    path: 'add-ads',
    component: AddAdsComponent,
    data: { animation: 'ads' }
  }
]; 

@NgModule({
  declarations: [SampleComponent, HomeComponent],
  imports: [RouterModule.forChild(routes), ContentHeaderModule, TranslateModule, CoreCommonModule,NgxDatatableModule],
  exports: [SampleComponent, HomeComponent]
})
export class SampleModule {}
