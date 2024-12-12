import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { LayoutModule } from './views/layout/layout.module';
import { AuthGuard } from './core/guard/auth.guard';

import { AppComponent } from './app.component';
import { ErrorPageComponent } from './views/pages/error-page/error-page.component';

import { HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './views/main-pages/students/students/students.component';
import { StudentsDevicesComponent } from './views/main-pages/students/students-devices/students-devices.component';
import { StudentsActivationCodesComponent } from './views/main-pages/students/students-activation-codes/students-activation-codes.component';
import { NotificationsComponent } from './views/main-pages/notifications/notifications.component';
import { StudentsNotificationsComponent } from './views/main-pages/students/students-notifications/students-notifications.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    StudentsComponent,
    StudentsDevicesComponent,
    StudentsActivationCodesComponent,
    NotificationsComponent,
    StudentsNotificationsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule  ,  HttpClientModule,
    FormsModule,
    CommonModule,
    FormsModule 

  ],
  providers: [
    AuthGuard,
    {
      provide: HIGHLIGHT_OPTIONS, // https://www.npmjs.com/package/ngx-highlightjs
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        languages: {
          xml: () => import('highlight.js/lib/languages/xml'),
          typescript: () => import('highlight.js/lib/languages/typescript'),
          scss: () => import('highlight.js/lib/languages/scss'),
        }
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
