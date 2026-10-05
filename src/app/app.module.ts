import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import 'hammerjs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { ToastrModule } from 'ngx-toastr'; // For auth after login toast

import { CoreModule } from '@core/core.module';
import { CoreCommonModule } from '@core/common.module';
import { CoreSidebarModule, CoreThemeCustomizerModule } from '@core/components';

import { coreConfig } from 'app/app-config';

import { AppComponent } from 'app/app.component';
import { LayoutModule } from 'app/layout/layout.module';
import { SampleModule } from 'app/main/sample/sample.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdsComponent } from './main/ganatak-dashboard/wajad/ads/ads.component';
import { AddAdsComponent } from './main/ganatak-dashboard/add-pages/add-ads/add-ads.component';
import { CounselorsComponent } from './main/ganatak-dashboard/wajad/counselors/counselors.component';
import { AddCounselorsComponent } from './main/ganatak-dashboard/add-pages/add-counselors/add-counselors.component';
import { StoresOffersComponent } from './main/ganatak-dashboard/wajad/stores-offers/stores-offers.component';
import { AddStoresOffersComponent } from './main/ganatak-dashboard/add-pages/add-stores-offers/add-stores-offers.component';
import { CancelationReasonComponent } from './main/ganatak-dashboard/wajad/cancelation-reason/cancelation-reason.component';
import { AddCancelationReasonComponent } from './main/ganatak-dashboard/add-pages/add-cancelation-reason/add-cancelation-reason.component';
import { CompaniesComponent } from './main/ganatak-dashboard/wajad/companies/companies.component';
import { AddCompaniesComponent } from './main/ganatak-dashboard/add-pages/add-companies/add-companies.component';
import { ConsultingComponent } from './main/ganatak-dashboard/wajad/consulting/consulting.component';
import { AddConsultingComponent } from './main/ganatak-dashboard/add-pages/add-consulting/add-consulting.component';
import { CategoriesComponent } from './main/ganatak-dashboard/wajad/categories/categories.component';
import { AddCategpriesComponent } from './main/ganatak-dashboard/add-pages/add-categpries/add-categpries.component';
import { ServicesComponent } from './main/ganatak-dashboard/wajad/services/services.component';
import { AddServicesComponent } from './main/ganatak-dashboard/add-pages/add-services/add-services.component';
import { TagsComponent } from './main/ganatak-dashboard/wajad/tags/tags.component';
import { AddTagsComponent } from './main/ganatak-dashboard/add-pages/add-tags/add-tags.component';
import { ArticlesComponent } from './main/ganatak-dashboard/wajad/articles/articles.component';
import { AddArticlesComponent } from './main/ganatak-dashboard/add-pages/add-articles/add-articles.component';
import { OffersComponent } from './main/ganatak-dashboard/wajad/offers/offers.component';
import { AddOffersComponent } from './main/ganatak-dashboard/add-pages/add-offers/add-offers.component';
import { AddLanguagePlantcardsComponent } from './main/ganatak-dashboard/add-pages/add-language-plantcards/add-language-plantcards.component';
import { AddUsersComponent } from './main/ganatak-dashboard/add-pages/add-users/add-users.component';
import { UsersComponent } from './main/ganatak-dashboard/wajad/users/users.component';
import { PlantCardsComponent } from './main/ganatak-dashboard/wajad/plant-cards/plant-cards.component';
import { SettingsDetailsComponent } from './main/ganatak-dashboard/wajad/settings-details/settings-details.component';
import { TermsConditionsComponent } from './main/ganatak-dashboard/wajad/terms-conditions/terms-conditions.component';
import { NotificationsComponent } from './main/ganatak-dashboard/wajad/notifications/notifications.component';
import { AboutComponent } from './main/ganatak-dashboard/wajad/about/about.component';
import { CurrenciesComponent } from './main/ganatak-dashboard/wajad/currencies/currencies.component';
import { CountriesComponent } from './main/ganatak-dashboard/wajad/countries/countries.component';
import { CitiesComponent } from './main/ganatak-dashboard/wajad/cities/cities.component';
import { LanguagePlansComponent } from './main/ganatak-dashboard/wajad/language-plans/language-plans.component';
import { OpenScreensComponent } from './main/ganatak-dashboard/wajad/open-screens/open-screens.component';
import { LanguageLightComponent } from './main/ganatak-dashboard/wajad/language-light/language-light.component';
import { GanatakCommunityComponent } from './main/ganatak-dashboard/wajad/ganatak-community/ganatak-community.component';
import { LanguageRootComponent } from './main/ganatak-dashboard/wajad/language-root/language-root.component';
import { LanguageSeedComponent } from './main/ganatak-dashboard/wajad/language-seed/language-seed.component';
import { LanguageSoilComponent } from './main/ganatak-dashboard/wajad/language-soil/language-soil.component';
import { LanguageStemComponent } from './main/ganatak-dashboard/wajad/language-stem/language-stem.component';
import { PaperformComponent } from './main/ganatak-dashboard/wajad/paperform/paperform.component';
import { SizesComponent } from './main/ganatak-dashboard/wajad/sizes/sizes.component';
import { LanguageCounselorspaymentComponent } from './main/ganatak-dashboard/wajad/language-counselorspayment/language-counselorspayment.component';
import { SlidersComponent } from './main/ganatak-dashboard/wajad/sliders/sliders.component';
import { AddCurrenciesComponent } from './main/ganatak-dashboard/add-pages/add-currencies/add-currencies.component';
import { AddCountriesComponent } from './main/ganatak-dashboard/add-pages/add-countries/add-countries.component';
import { AddCitiesComponent } from './main/ganatak-dashboard/add-pages/add-cities/add-cities.component';
import { AddLanguagePlansComponent } from './main/ganatak-dashboard/add-pages/add-language-plans/add-language-plans.component';
import { AddOpenScreensComponent } from './main/ganatak-dashboard/add-pages/add-open-screens/add-open-screens.component';
import { AddLanguageLightComponent } from './main/ganatak-dashboard/add-pages/add-language-light/add-language-light.component';
import { AddGanatakCommunityComponent } from './main/ganatak-dashboard/add-pages/add-ganatak-community/add-ganatak-community.component';
import { AddLanguageRootComponent } from './main/ganatak-dashboard/add-pages/add-language-root/add-language-root.component';
import { AddLanguageSeedComponent } from './main/ganatak-dashboard/add-pages/add-language-seed/add-language-seed.component';
import { AddLanguageSoilComponent } from './main/ganatak-dashboard/add-pages/add-language-soil/add-language-soil.component';
import { AddLanguageStemComponent } from './main/ganatak-dashboard/add-pages/add-language-stem/add-language-stem.component';
import { AddPaperformComponent } from './main/ganatak-dashboard/add-pages/add-paperform/add-paperform.component';
import { AddSizesComponent } from './main/ganatak-dashboard/add-pages/add-sizes/add-sizes.component';
import { AddLanguageCounselorspaymentComponent } from './main/ganatak-dashboard/add-pages/add-language-counselorspayment/add-language-counselorspayment.component';
import { AddSlidersComponent } from './main/ganatak-dashboard/add-pages/add-sliders/add-sliders.component';
import { VouchersComponent } from './main/ganatak-dashboard/wajad/vouchers/vouchers.component';
import { SignInComponent } from './main/sign-in/sign-in.component';
import { CommonModule } from '@angular/common';
import { JwtInterceptor } from './auth/helpers';

const appRoutes: Routes = [
  {
    path: 'pages',
    loadChildren: () => import('./main/pages/pages.module').then(m => m.PagesModule)
  },
  {
    path: '',
    redirectTo: '/anmar/home-details',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/pages/miscellaneous/error' //Error 404 - Page not found
  },
  
];

@NgModule({
  declarations: [AppComponent , AdsComponent,AddAdsComponent , CounselorsComponent , 
    AddCounselorsComponent ,StoresOffersComponent, AddStoresOffersComponent,CancelationReasonComponent,
  AddCancelationReasonComponent,CompaniesComponent,AddCompaniesComponent,ConsultingComponent,
AddConsultingComponent,CategoriesComponent,AddCategpriesComponent,ServicesComponent,AddServicesComponent,
TagsComponent,AddTagsComponent,ArticlesComponent,AddArticlesComponent,OffersComponent,AddOffersComponent,
AddLanguagePlantcardsComponent,AddUsersComponent,UsersComponent,PlantCardsComponent,
SettingsDetailsComponent,TermsConditionsComponent,NotificationsComponent,AboutComponent,
CurrenciesComponent,CountriesComponent,CitiesComponent,LanguagePlansComponent,OpenScreensComponent,
LanguageLightComponent,GanatakCommunityComponent,LanguageRootComponent,LanguageSeedComponent,
LanguageSoilComponent,LanguageStemComponent,PaperformComponent,SizesComponent,LanguageCounselorspaymentComponent,
SlidersComponent , AddCurrenciesComponent , AddCountriesComponent,AddCitiesComponent, AddLanguagePlansComponent , AddOpenScreensComponent, AddLanguageLightComponent, AddGanatakCommunityComponent, AddLanguageRootComponent , AddLanguageSeedComponent,AddLanguageSoilComponent,AddLanguageStemComponent, AddPaperformComponent, AddSizesComponent ,AddCounselorsComponent,AddLanguageCounselorspaymentComponent,AddSizesComponent,AddCounselorsComponent, AddSlidersComponent , VouchersComponent , AddCounselorsComponent, SignInComponent

],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {
      scrollPositionRestoration: 'enabled', // Add options right here
      relativeLinkResolution: 'legacy',
      useHash: true
    }),
    TranslateModule.forRoot(),

    //NgBootstrap
    NgbModule,
    ToastrModule.forRoot(),

    // Core modules
    CoreModule.forRoot(coreConfig),
    CoreCommonModule,
    CoreSidebarModule,
    CoreThemeCustomizerModule,

    // App modules
    LayoutModule,
    SampleModule,
    NgxDatatableModule,
     FormsModule,ReactiveFormsModule, FormsModule , CommonModule
  ],

  bootstrap: [AppComponent],
  providers: [{provide:HTTP_INTERCEPTORS , useClass:JwtInterceptor, multi:true}]
})
export class AppModule {}
