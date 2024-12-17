import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

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

const appRoutes: Routes = [
  {
    path: 'pages',
    loadChildren: () => import('./main/pages/pages.module').then(m => m.PagesModule)
  },
  {
    path: '',
    redirectTo: '/users',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/pages/miscellaneous/error' //Error 404 - Page not found
  }
];

@NgModule({
  declarations: [AppComponent , AdsComponent,AddAdsComponent , CounselorsComponent , 
    AddCounselorsComponent ,StoresOffersComponent, AddStoresOffersComponent,CancelationReasonComponent,
  AddCancelationReasonComponent,CompaniesComponent,AddCompaniesComponent,ConsultingComponent,
AddConsultingComponent,CategoriesComponent,AddCategpriesComponent,ServicesComponent,AddServicesComponent,
TagsComponent,AddTagsComponent,ArticlesComponent,AddArticlesComponent,OffersComponent,AddOffersComponent,
AddLanguagePlantcardsComponent,AddUsersComponent,UsersComponent,PlantCardsComponent,
SettingsDetailsComponent,TermsConditionsComponent,NotificationsComponent,AboutComponent,

],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {
      scrollPositionRestoration: 'enabled', // Add options right here
      relativeLinkResolution: 'legacy'
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
     FormsModule,ReactiveFormsModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule {}
