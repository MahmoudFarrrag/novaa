import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CoreCommonModule } from '@core/common.module';
import { HomeDetailsListComponent } from './home-details/home-details-list.component';
import { HomeDetailsFormComponent } from './home-details/home-details-form.component';
import { HomeAboutListComponent } from './home-about/home-about-list.component';
import { HomeAboutFormComponent } from './home-about/home-about-form.component';
import { HomeServicesListComponent } from './home-services/home-services-list.component';
import { HomeServicesFormComponent } from './home-services/home-services-form.component';
import { HomeBusinessListComponent } from './home-business/home-business-list.component';
import { HomeBusinessFormComponent } from './home-business/home-business-form.component';
import { HomeWorkListComponent } from './home-work/home-work-list.component';
import { HomeWorkFormComponent } from './home-work/home-work-form.component';
import { HomeClientsListComponent } from './home-clients/home-clients-list.component';
import { HomeClientsFormComponent } from './home-clients/home-clients-form.component';
import { HomePartnersListComponent } from './home-partners/home-partners-list.component';
import { HomePartnersFormComponent } from './home-partners/home-partners-form.component';
import { AboutDatesListComponent } from './about-dates/about-dates-list.component';
import { AboutDatesFormComponent } from './about-dates/about-dates-form.component';
import { AboutVisionListComponent } from './about-vision/about-vision-list.component';
import { AboutVisionFormComponent } from './about-vision/about-vision-form.component';
import { AboutValueListComponent } from './about-value/about-value-list.component';
import { AboutValueFormComponent } from './about-value/about-value-form.component';
import { AboutTeamListComponent } from './about-team/about-team-list.component';
import { AboutTeamFormComponent } from './about-team/about-team-form.component';
import { ServicesStepsListComponent } from './services-steps/services-steps-list.component';
import { ServicesStepsFormComponent } from './services-steps/services-steps-form.component';
import { ContactMessagesListComponent } from './contact-messages/contact-messages-list.component';
import { ContactMessagesFormComponent } from './contact-messages/contact-messages-form.component';
import { BlogListComponent } from './blog/blog-list.component';
import { BlogFormComponent } from './blog/blog-form.component';

const routes: Routes = [
  { path: 'anmar/home-details', component: HomeDetailsListComponent },
  { path: 'anmar/home-details/add', component: HomeDetailsFormComponent },
  { path: 'anmar/home-details/edit/:id', component: HomeDetailsFormComponent },
  { path: 'anmar/home-about', component: HomeAboutListComponent },
  { path: 'anmar/home-about/add', component: HomeAboutFormComponent },
  { path: 'anmar/home-about/edit/:id', component: HomeAboutFormComponent },
  { path: 'anmar/home-services', component: HomeServicesListComponent },
  { path: 'anmar/home-services/add', component: HomeServicesFormComponent },
  { path: 'anmar/home-services/edit/:id', component: HomeServicesFormComponent },
  { path: 'anmar/home-business', component: HomeBusinessListComponent },
  { path: 'anmar/home-business/add', component: HomeBusinessFormComponent },
  { path: 'anmar/home-business/edit/:id', component: HomeBusinessFormComponent },
  { path: 'anmar/home-work', component: HomeWorkListComponent },
  { path: 'anmar/home-work/add', component: HomeWorkFormComponent },
  { path: 'anmar/home-work/edit/:id', component: HomeWorkFormComponent },
  { path: 'anmar/home-clients', component: HomeClientsListComponent },
  { path: 'anmar/home-clients/add', component: HomeClientsFormComponent },
  { path: 'anmar/home-clients/edit/:id', component: HomeClientsFormComponent },
  { path: 'anmar/home-partners', component: HomePartnersListComponent },
  { path: 'anmar/home-partners/add', component: HomePartnersFormComponent },
  { path: 'anmar/home-partners/edit/:id', component: HomePartnersFormComponent },
  { path: 'anmar/about-dates', component: AboutDatesListComponent },
  { path: 'anmar/about-dates/add', component: AboutDatesFormComponent },
  { path: 'anmar/about-dates/edit/:id', component: AboutDatesFormComponent },
  { path: 'anmar/about-vision', component: AboutVisionListComponent },
  { path: 'anmar/about-vision/add', component: AboutVisionFormComponent },
  { path: 'anmar/about-vision/edit/:id', component: AboutVisionFormComponent },
  { path: 'anmar/about-value', component: AboutValueListComponent },
  { path: 'anmar/about-value/add', component: AboutValueFormComponent },
  { path: 'anmar/about-value/edit/:id', component: AboutValueFormComponent },
  { path: 'anmar/about-team', component: AboutTeamListComponent },
  { path: 'anmar/about-team/add', component: AboutTeamFormComponent },
  { path: 'anmar/about-team/edit/:id', component: AboutTeamFormComponent },
  { path: 'anmar/services-steps', component: ServicesStepsListComponent },
  { path: 'anmar/services-steps/add', component: ServicesStepsFormComponent },
  { path: 'anmar/services-steps/edit/:id', component: ServicesStepsFormComponent },
  { path: 'anmar/contact-messages', component: ContactMessagesListComponent },
  { path: 'anmar/contact-messages/edit/:id', component: ContactMessagesFormComponent },
  { path: 'anmar/blog', component: BlogListComponent },
  { path: 'anmar/blog/add', component: BlogFormComponent },
  { path: 'anmar/blog/edit/:id', component: BlogFormComponent },
];

@NgModule({
  declarations: [
    HomeDetailsListComponent,
    HomeDetailsFormComponent,
    HomeAboutListComponent,
    HomeAboutFormComponent,
    HomeServicesListComponent,
    HomeServicesFormComponent,
    HomeBusinessListComponent,
    HomeBusinessFormComponent,
    HomeWorkListComponent,
    HomeWorkFormComponent,
    HomeClientsListComponent,
    HomeClientsFormComponent,
    HomePartnersListComponent,
    HomePartnersFormComponent,
    AboutDatesListComponent,
    AboutDatesFormComponent,
    AboutVisionListComponent,
    AboutVisionFormComponent,
    AboutValueListComponent,
    AboutValueFormComponent,
    AboutTeamListComponent,
    AboutTeamFormComponent,
    ServicesStepsListComponent,
    ServicesStepsFormComponent,
    ContactMessagesListComponent,
    ContactMessagesFormComponent,
    BlogListComponent,
    BlogFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    NgxDatatableModule,
    CoreCommonModule,
    NgbModule,
    NgbDropdownModule,
    TranslateModule
  ],
  exports: [RouterModule]
})
export class AnmarModule {}
