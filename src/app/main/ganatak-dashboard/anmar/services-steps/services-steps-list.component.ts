import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AnmarApiService } from '../anmar-api.service';
import { AnmarBaseListComponent } from '../shared/anmar-base-list.component';
import { ANMAR_RESOURCES } from '../shared/anmar-resources';

@Component({
  selector: 'app-services-steps-list',
  templateUrl: './services-steps-list.component.html',
  styleUrls: ['./services-steps-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ServicesStepsListComponent extends AnmarBaseListComponent {
  config = ANMAR_RESOURCES['servicesSteps'];

  constructor(api: AnmarApiService, router: Router, toastr: ToastrService) {
    super(api, router, toastr);
  }
}
