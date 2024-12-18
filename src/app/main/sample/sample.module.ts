import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

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
import { OpenScreensListComponent } from '../ganatak-dashboard/wajad/open-screens-list/open-screens-list.component';
import { LanguagePlansComponent } from '../ganatak-dashboard/wajad/language-plans/language-plans.component';
import { LanguageLightComponent } from '../ganatak-dashboard/wajad/language-light/language-light.component';

import { LanguageRootComponent } from '../ganatak-dashboard/wajad/language-root/language-root.component';
import { LanguageSeedComponent } from '../ganatak-dashboard/wajad/language-seed/language-seed.component';
import { LanguageSoilComponent } from '../ganatak-dashboard/wajad/language-soil/language-soil.component';
import { LanguageStemComponent } from '../ganatak-dashboard/wajad/language-stem/language-stem.component';
import { PaperFormListComponent } from '../ganatak-dashboard/wajad/paper-form-list/paper-form-list.component';
import { SizesComponent } from '../ganatak-dashboard/wajad/sizes/sizes.component';
import { LanguageCounselorspaymentComponent } from '../ganatak-dashboard/wajad/language-counselorspayment/language-counselorspayment.component';
import { CurrenciesListComponent } from '../ganatak-dashboard/wajad/currencies-list/currencies-list.component';
import { CountriesListComponent } from '../ganatak-dashboard/wajad/countries-list/countries-list.component';
import { CitiesListComponent } from '../ganatak-dashboard/wajad/cities-list/cities-list.component';
import { GanatakCommunityListComponent } from '../ganatak-dashboard/wajad/ganatak-community-list/ganatak-community-list.component';
import { AddCurrenciesComponent } from '../ganatak-dashboard/add-pages/add-currencies/add-currencies.component';
import { AddCountriesComponent } from '../ganatak-dashboard/add-pages/add-countries/add-countries.component';
import { AddCitiesComponent } from '../ganatak-dashboard/add-pages/add-cities/add-cities.component';
import { AddLanguagePlansComponent } from '../ganatak-dashboard/add-pages/add-language-plans/add-language-plans.component';
import { AddOpenScreensComponent } from '../ganatak-dashboard/add-pages/add-open-screens/add-open-screens.component';
import { AddLanguageLightComponent } from '../ganatak-dashboard/add-pages/add-language-light/add-language-light.component';
import { AddGanatakCommunityComponent } from '../ganatak-dashboard/add-pages/add-ganatak-community/add-ganatak-community.component';
import { AddLanguageSeedComponent } from '../ganatak-dashboard/add-pages/add-language-seed/add-language-seed.component';
import { AddLanguageSoilComponent } from '../ganatak-dashboard/add-pages/add-language-soil/add-language-soil.component';
import { AddLanguageStemComponent } from '../ganatak-dashboard/add-pages/add-language-stem/add-language-stem.component';
import { AddPaperformComponent } from '../ganatak-dashboard/add-pages/add-paperform/add-paperform.component';
import { AddSizesComponent } from '../ganatak-dashboard/add-pages/add-sizes/add-sizes.component';
import { AddSlidersComponent } from '../ganatak-dashboard/add-pages/add-sliders/add-sliders.component';
import { AddLanguageCounselorspaymentComponent } from '../ganatak-dashboard/add-pages/add-language-counselorspayment/add-language-counselorspayment.component';
import { AddLanguageRootComponent } from '../ganatak-dashboard/add-pages/add-language-root/add-language-root.component';
import { SlidersComponent } from '../ganatak-dashboard/wajad/sliders/sliders.component';

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
  path: 'curriences-list',
  component: CurrenciesListComponent,
  data: { animation: 'ads' }
} , 
{
  path: 'curriences-add',
  component: AddCurrenciesComponent,
  data: { animation: 'ads' }
} ,

{
  path: 'countires-add',
  component: AddCountriesComponent,
  data: { animation: 'ads' }
} , 

{
  path: 'countries-list',
  component: CountriesListComponent,
  data: { animation: 'ads' }
} , 

{
  path: 'cities-list',
  component: CitiesListComponent,
  data: { animation: 'ads' }
} , 

{
  path: 'cities-add',
  component: AddCitiesComponent,
  data: { animation: 'ads' }
} ,

{
  path: 'languagePlans',
  component: LanguagePlansComponent,
  data: { animation: 'ads' }
} ,

{
  path: 'languagePlans-add',
  component: AddLanguagePlansComponent,
  data: { animation: 'ads' }
} ,

{
  path: 'openScreens-list',
  component: OpenScreensListComponent,
  data: { animation: 'ads' }
} ,

{
  path: 'openScreens-add',
  component: AddOpenScreensComponent,
  data: { animation: 'ads' }
} ,

{
  path: 'languageLight-list',
  component: LanguageLightComponent,
  data: { animation: 'ads' }
} ,

{
  path: 'languageLight-add',
  component:AddLanguageLightComponent,
  data: { animation: 'ads' }
} ,
  
{
  path: 'ganatakCommunity-list',
  component: GanatakCommunityListComponent,
  data: { animation: 'ads' }
} ,
{
  path: 'ganatakCommunity-add',
  component: AddGanatakCommunityComponent,
  data: { animation: 'ads' }
} ,
{
  path: 'languageRoot-list',
  component: LanguageRootComponent,
  data: { animation: 'ads' }
} ,
{
  path: 'languageRoot-add',
  component: AddLanguageRootComponent,
  data: { animation: 'ads' }
} ,
{
  path: 'languageSeed-list',
  component:LanguageSeedComponent,
  data: { animation: 'ads' }
} ,

{
  path: 'languageSeed-add',
  component: AddLanguageSeedComponent,
  data: { animation: 'ads' }
} ,

{
  path: 'languageSoil-list',
  component: LanguageSoilComponent,
  data: { animation: 'ads' }
} ,

{
  path: 'languageSoil-add',
  component: AddLanguageSoilComponent,
  data: { animation: 'ads' }
} ,

{
  path: 'languageStem-list',
  component: LanguageStemComponent,
  data: { animation: 'ads' }
} ,

{
  path: 'languageStem-add',
  component: AddLanguageStemComponent,
  data: { animation: 'ads' }
} ,

{
  path: 'paperForm-list',
  component: PaperFormListComponent,
  data: { animation: 'ads' }
} ,

{
  path: 'paperForm-add',
  component: AddPaperformComponent,
  data: { animation: 'ads' }
} ,

{
  path: 'sizes-list',
  component: SizesComponent,
  data: { animation: 'ads' }
} ,

{
  path: 'sizes-add',
  component: AddSizesComponent,
  data: { animation: 'ads' }
} ,

{
  path: 'sliders-list',
  component: SlidersComponent,
  data: { animation: 'ads' }
} ,

{
  path: 'sliders-add',
  component: AddSlidersComponent,
  data: { animation: 'ads' }
} ,

{
  path: 'languageConsulers-list',
  component: LanguageCounselorspaymentComponent,
  data: { animation: 'ads' }
} ,
{
  path: 'languageConsulers-add',
  component: AddLanguageCounselorspaymentComponent,
  data: { animation: 'ads' }
} ,
]; 

@NgModule({
  declarations: [SampleComponent, HomeComponent],
  imports: [RouterModule.forChild(routes), ContentHeaderModule, TranslateModule, CoreCommonModule,NgxDatatableModule, CommonModule ],
  exports: [SampleComponent, HomeComponent]
})
export class SampleModule {}
