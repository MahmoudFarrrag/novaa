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
import { CounselorsComponent } from '../ganatak-dashboard/wajad/counselors/counselors.component';
import { AddCounselorsComponent } from '../ganatak-dashboard/counselors/add-counselors/add-counselors.component';
import { StoresOffersComponent } from '../ganatak-dashboard/wajad/stores-offers/stores-offers.component';
import { VouchersComponent } from '../ganatak-dashboard/wajad/vouchers/vouchers.component';
import { AddStoresOffersComponent } from '../ganatak-dashboard/add-pages/add-stores-offers/add-stores-offers.component';
import { CancelationReasonComponent } from '../ganatak-dashboard/wajad/cancelation-reason/cancelation-reason.component';
import { AddCancelationReasonComponent } from '../ganatak-dashboard/add-pages/add-cancelation-reason/add-cancelation-reason.component';
import { CompaniesComponent } from '../ganatak-dashboard/wajad/companies/companies.component';
import { AddCompaniesComponent } from '../ganatak-dashboard/add-pages/add-companies/add-companies.component';
import { ConsultingComponent } from '../ganatak-dashboard/wajad/consulting/consulting.component';
import { AddConsultingComponent } from '../ganatak-dashboard/add-pages/add-consulting/add-consulting.component';
import { ServicesComponent } from '../ganatak-dashboard/wajad/services/services.component';
import { AddServicesComponent } from '../ganatak-dashboard/add-pages/add-services/add-services.component';
import { TagsComponent } from '../ganatak-dashboard/wajad/tags/tags.component';
import { AddTagsComponent } from '../ganatak-dashboard/add-pages/add-tags/add-tags.component';
import { ArticlesComponent } from '../ganatak-dashboard/wajad/articles/articles.component';
import { AddArticlesComponent } from '../ganatak-dashboard/add-pages/add-articles/add-articles.component';
import { OffersComponent } from '../ganatak-dashboard/wajad/offers/offers.component';
import { CategoriesComponent } from '../ganatak-dashboard/wajad/categories/categories.component';
import { AddCategpriesComponent } from '../ganatak-dashboard/add-pages/add-categpries/add-categpries.component';
import { AddOffersComponent } from '../ganatak-dashboard/add-pages/add-offers/add-offers.component';

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
    path: 'counselors',
    component: CounselorsComponent,
    data: { animation: 'ads' }
  },
  {
    path: 'add-counselors',
    component: AddCounselorsComponent,
    data: { animation: 'ads' }
  },
  {
    path: 'add-ads',
    component: AddAdsComponent,
    data: { animation: 'ads' }
  }, 

  {
    path: 'StoresOffers',
    component: StoresOffersComponent,
    data: { animation: 'ads' }
  }, 
  {
    path: 'StoresOffers-Vouchers',
    component: VouchersComponent,
    data: { animation: 'ads' }
  },
  {
    path: 'StoresOffers-add',
    component: AddStoresOffersComponent,
    data: { animation: 'ads' }
  },
  {
    path: 'CancelationReasons',
    component: CancelationReasonComponent,
    data: { animation: 'ads' }
  },  
  
  {
    path: 'CancelationReasons-add',
    component: AddCancelationReasonComponent,
    data: { animation: 'ads' }
  } ,
  {
    path: 'Companies',
    component: CompaniesComponent,
    data: { animation: 'ads' }
  } ,
  {
    path: 'Companies-add',
    component: AddCompaniesComponent,
    data: { animation: 'ads' }
  } ,
  {
    path: 'Consulting',
    component: ConsultingComponent,
    data: { animation: 'ads' }
  } ,  {
    path: 'Consulting-add',
    component: AddConsultingComponent,
    data: { animation: 'ads' }
  } ,
   
  {
    path: 'Categories',
    component: CategoriesComponent,
    data: { animation: 'ads' }
  } , 
  
  {
    path: 'Categories-add',
    component: AddCategpriesComponent,
    data: { animation: 'ads' }
  }
 ,{
  path: 'Services',
  component: ServicesComponent,
  data: { animation: 'ads' }
} ,
{
  path: 'Services-add',
  component: AddServicesComponent,
  data: { animation: 'ads' }
} ,
{
  path: 'Tags',
  component: TagsComponent,
  data: { animation: 'ads' }
} , 
{
  path: 'Tags-add',
  component: AddTagsComponent,
  data: { animation: 'ads' }
} , 
{
  path: 'Articles',
  component: ArticlesComponent,
  data: { animation: 'ads' }
} ,
 
{
  path: 'Articles-add',
  component: AddArticlesComponent,
  data: { animation: 'ads' }
} ,
 
{
  path: 'Offers',
  component: OffersComponent,
  data: { animation: 'ads' }
} ,
 
{
  path: 'Offers-add',
  component: AddOffersComponent,
  data: { animation: 'ads' }
} , 
// {
//   path: 'planetCards',
//   component: plane,
//   data: { animation: 'ads' }
// } , 
// {
//   path: 'planetCards-add',
//   component: ,
//   data: { animation: 'ads' }
// } , 

  
]; 

@NgModule({
  declarations: [SampleComponent, HomeComponent],
  imports: [RouterModule.forChild(routes), ContentHeaderModule, TranslateModule, CoreCommonModule,NgxDatatableModule],
  exports: [SampleComponent, HomeComponent]
})
export class SampleModule {}
