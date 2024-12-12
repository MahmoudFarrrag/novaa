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
import { AdsComponent } from './wajad/ads/ads.component';
import { CounselorsComponent } from './wajad/counselors/counselors.component';
import { StoresComponent } from './wajad/stores/stores.component';
import { VouchersComponent } from './wajad/vouchers/vouchers.component';
import { StoresOffersComponent } from './wajad/stores-offers/stores-offers.component';
import { CancelationReasonComponent } from './wajad/cancelation-reason/cancelation-reason.component';
import { CompaniesComponent } from './wajad/companies/companies.component';
import { ConsultingComponent } from './wajad/consulting/consulting.component';
import { CategoriesComponent } from './wajad/categories/categories.component';
import { ServicesComponent } from './wajad/services/services.component';
import { TagsComponent } from './wajad/tags/tags.component';
import { ArticlesComponent } from './wajad/articles/articles.component';
import { OffersComponent } from './wajad/offers/offers.component';
import { LanguageComponent } from './wajad/language/language.component';
import { TermsConditionsComponent } from './wajad/terms-conditions/terms-conditions.component';
import { AboutComponent } from './wajad/about/about.component';
import { NotificationsComponent } from './wajad/notifications/notifications.component';
import { CurrenciesComponent } from './wajad/currencies/currencies.component';
import { CountriesComponent } from './wajad/countries/countries.component';
import { CitiesComponent } from './wajad/cities/cities.component';
import { LanguagePlansComponent } from './wajad/language-plans/language-plans.component';
import { OpenScreensComponent } from './wajad/open-screens/open-screens.component';
import { LanguageLightComponent } from './wajad/language-light/language-light.component';
import { GanatakCommunityComponent } from './wajad/ganatak-community/ganatak-community.component';
import { LanguageRootComponent } from './wajad/language-root/language-root.component';
import { LanguageSeedComponent } from './wajad/language-seed/language-seed.component';
import { LanguageSoilComponent } from './wajad/language-soil/language-soil.component';
import { LanguageStemComponent } from './wajad/language-stem/language-stem.component';
import { PaperformComponent } from './wajad/paperform/paperform.component';
import { SizesComponent } from './wajad/sizes/sizes.component';
import { LanguageCounselorspaymentComponent } from './wajad/language-counselorspayment/language-counselorspayment.component';
import { SlidersComponent } from './wajad/sliders/sliders.component';
import { AddUsersComponent } from './add-pages/add-users/add-users.component';
import { AddAdsComponent } from './add-pages/add-ads/add-ads.component';
import { AddCounselorsComponent } from './add-pages/add-counselors/add-counselors.component';
import { AddStoresComponent } from './add-pages/add-stores/add-stores.component';
import { AddStoresOffersComponent } from './add-pages/add-stores-offers/add-stores-offers.component';
import { AddVouchersComponent } from './add-pages/add-vouchers/add-vouchers.component';
import { AddCancelationReasonComponent } from './add-pages/add-cancelation-reason/add-cancelation-reason.component';
import { AddCompaniesComponent } from './add-pages/add-companies/add-companies.component';
import { AddConsultingComponent } from './add-pages/add-consulting/add-consulting.component';
import { AddCategpriesComponent } from './add-pages/add-categpries/add-categpries.component';
import { AddServicesComponent } from './add-pages/add-services/add-services.component';
import { AddTagsComponent } from './add-pages/add-tags/add-tags.component';
import { AddArticlesComponent } from './add-pages/add-articles/add-articles.component';
import { AddOffersComponent } from './add-pages/add-offers/add-offers.component';
import { AddLanguagePlantcardsComponent } from './add-pages/add-language-plantcards/add-language-plantcards.component';
import { AddCurrenciesComponent } from './add-pages/add-currencies/add-currencies.component';
import { AddCitiesComponent } from './add-pages/add-cities/add-cities.component';
import { AddLanguagePlansComponent } from './add-pages/add-language-plans/add-language-plans.component';
import { AddOpenScreensComponent } from './add-pages/add-open-screens/add-open-screens.component';
import { AddLanguageLightComponent } from './add-pages/add-language-light/add-language-light.component';
import { AddGanatakCommunityComponent } from './add-pages/add-ganatak-community/add-ganatak-community.component';
import { AddLanguageRootComponent } from './add-pages/add-language-root/add-language-root.component';
import { AddLanguageSeedComponent } from './add-pages/add-language-seed/add-language-seed.component';
import { AddLanguageSoilComponent } from './add-pages/add-language-soil/add-language-soil.component';
import { AddLanguageStemComponent } from './add-pages/add-language-stem/add-language-stem.component';
import { AddPaperformComponent } from './add-pages/add-paperform/add-paperform.component';
import { AddSizesComponent } from './add-pages/add-sizes/add-sizes.component';
import { AddLanguageCounselorspaymentComponent } from './add-pages/add-language-counselorspayment/add-language-counselorspayment.component';
import { AddSlidersComponent } from './add-pages/add-sliders/add-sliders.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};


@NgModule({
  declarations: [BaseComponent, NavbarComponent, SidebarComponent, FooterComponent, ContentAnimateDirective, UsersComponent, AddStudentsComponent, ActivationCodesComponent, AddDevicesComponent, AddCountriesComponent, AddOnbourdingsComponent, AddActivationCodesComponent, AdsComponent, CounselorsComponent, StoresComponent, VouchersComponent, StoresOffersComponent, CancelationReasonComponent, CompaniesComponent, ConsultingComponent, CategoriesComponent, ServicesComponent, TagsComponent, ArticlesComponent, OffersComponent, LanguageComponent, TermsConditionsComponent, AboutComponent, NotificationsComponent, CurrenciesComponent, CountriesComponent, CitiesComponent, LanguagePlansComponent, OpenScreensComponent, LanguageLightComponent, GanatakCommunityComponent, LanguageRootComponent, LanguageSeedComponent, LanguageSoilComponent, LanguageStemComponent, PaperformComponent, SizesComponent, LanguageCounselorspaymentComponent, SlidersComponent, AddUsersComponent, AddAdsComponent, AddCounselorsComponent, AddStoresComponent, AddStoresOffersComponent, AddVouchersComponent, AddCancelationReasonComponent, AddCompaniesComponent, AddConsultingComponent, AddCategpriesComponent, AddServicesComponent, AddTagsComponent, AddArticlesComponent, AddOffersComponent, AddLanguagePlantcardsComponent, AddCurrenciesComponent, AddCitiesComponent, AddLanguagePlansComponent, AddOpenScreensComponent, AddLanguageLightComponent, AddGanatakCommunityComponent, AddLanguageRootComponent, AddLanguageSeedComponent, AddLanguageSoilComponent, AddLanguageStemComponent, AddPaperformComponent, AddSizesComponent, AddLanguageCounselorspaymentComponent, AddSlidersComponent],
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
