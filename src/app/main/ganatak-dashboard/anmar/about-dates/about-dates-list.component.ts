import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AnmarApiService } from '../anmar-api.service';
import { AnmarBaseListComponent } from '../shared/anmar-base-list.component';
import { ANMAR_RESOURCES } from '../shared/anmar-resources';

@Component({
  selector: 'app-about-dates-list',
  templateUrl: './about-dates-list.component.html',
  styleUrls: ['./about-dates-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AboutDatesListComponent extends AnmarBaseListComponent {
  config = ANMAR_RESOURCES['aboutDates'];

  constructor(api: AnmarApiService, router: Router, toastr: ToastrService) {
    super(api, router, toastr);
  }
}
