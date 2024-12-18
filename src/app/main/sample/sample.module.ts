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
import { PlantCardsComponent } from '../ganatak-dashboard/wajad/plant-cards/plant-cards.component';
import { AddLanguagePlantcardsComponent } from '../ganatak-dashboard/add-pages/add-language-plantcards/add-language-plantcards.component';
import { UsersComponent } from '../ganatak-dashboard/wajad/users/users.component';
import { AddUsersComponent } from '../ganatak-dashboard/add-pages/add-users/add-users.component';
import { SettingsDetailsComponent } from '../ganatak-dashboard/wajad/settings-details/settings-details.component';
import { TermsConditionsComponent } from '../ganatak-dashboard/wajad/terms-conditions/terms-conditions.component';
import { AboutComponent } from '../ganatak-dashboard/wajad/about/about.component';
import { NotificationsComponent } from '../ganatak-dashboard/wajad/notifications/notifications.component';
import { CurrenciesComponent } from '../ganatak-dashboard/wajad/currencies/currencies.component';
import { CountriesComponent } from '../ganatak-dashboard/wajad/countries/countries.component';
import { CitiesComponent } from '../ganatak-dashboard/wajad/cities/cities.component';
import { LanguagePlansComponent } from '../ganatak-dashboard/wajad/language-plans/language-plans.component';
import { OpenScreensComponent } from '../ganatak-dashboard/wajad/open-screens/open-screens.component';
import { LanguageLightComponent } from '../ganatak-dashboard/wajad/language-light/language-light.component';
import { GanatakCommunityComponent } from '../ganatak-dashboard/wajad/ganatak-community/ganatak-community.component';
import { LanguageRootComponent } from '../ganatak-dashboard/wajad/language-root/language-root.component';
import { LanguageSeedComponent } from '../ganatak-dashboard/wajad/language-seed/language-seed.component';
import { LanguageSoilComponent } from '../ganatak-dashboard/wajad/language-soil/language-soil.component';
import { LanguageStemComponent } from '../ganatak-dashboard/wajad/language-stem/language-stem.component';
import { PaperformComponent } from '../ganatak-dashboard/wajad/paperform/paperform.component';
import { SizesComponent } from '../ganatak-dashboard/wajad/sizes/sizes.component';
import { SlidersComponent } from '../ganatak-dashboard/wajad/sliders/sliders.component';
import { LanguageCounselorspaymentComponent } from '../ganatak-dashboard/wajad/language-counselorspayment/language-counselorspayment.component';

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
{
  path: 'planetCards',
  component: PlantCardsComponent,
  data: { animation: 'ads' }
} , 
{
  path: 'planetCards-add',
  component: AddLanguagePlantcardsComponent,
  data: { animation: 'ads' }
} , 
{
  path: 'users',
  component: UsersComponent,
  data: { animation: 'ads' }
} , 
{
  path: 'users-add',
  component: AddUsersComponent,
  data: { animation: 'ads' }
} , 
{
  path: 'settings',
  component: SettingsDetailsComponent,
  data: { animation: 'ads' }
} , 
{
  path: 'terms-conditions',
  component: TermsConditionsComponent,
  data: { animation: 'ads' }
} , 
{
  path: 'about',
  component: AboutComponent,
  data: { animation: 'ads' }
} , 
{
  path: 'notifications',
  component: NotificationsComponent,
  data: { animation: 'ads' }
} , 
{
  path: 'currencies',
  component: CurrenciesComponent,
  data: { animation: 'ads' }
} , 
{
  path: 'countries',
  component: CountriesComponent,
  data: { animation: 'ads' }
} , 
{
  path: 'cities',
  component: CitiesComponent,
  data: { animation: 'ads' }
} , 
{
  path: 'plans',
  component: LanguagePlansComponent,
  data: { animation: 'ads' }
} , 
{
  path: 'open-screen',
  component: OpenScreensComponent,
  data: { animation: 'ads' }
} , 
{
  path: 'light',
  component: LanguageLightComponent,
  data: { animation: 'ads' }
} , 
{
  path: 'ganatak',
  component: GanatakCommunityComponent,
  data: { animation: 'ads' }
} , 
{
  path: 'root',
  component: LanguageRootComponent,
  data: { animation: 'ads' }
} , 
{
  path: 'seed',
  component: LanguageSeedComponent,
  data: { animation: 'ads' }
} , 
{
  path: 'soil',
  component: LanguageSoilComponent,
  data: { animation: 'ads' }
} , 
{
  path: 'stem',
  component: LanguageStemComponent,
  data: { animation: 'ads' }
} , 
{
  path: 'paperform',
  component: PaperformComponent,
  data: { animation: 'ads' }
} , 
{
  path: 'sizes',
  component: SizesComponent,
  data: { animation: 'ads' }
} , 
{
  path: 'counselorPayment',
  component: LanguageCounselorspaymentComponent,
  data: { animation: 'ads' }
} , 
{
  path: 'sliders',
  component: SlidersComponent,
  data: { animation: 'ads' }
} , 

  
]; 

@NgModule({
  declarations: [SampleComponent, HomeComponent],
  imports: [RouterModule.forChild(routes), ContentHeaderModule, TranslateModule, CoreCommonModule,NgxDatatableModule],
  exports: [SampleComponent, HomeComponent]
})
export class SampleModule {}
