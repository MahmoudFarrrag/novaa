import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AnmarApiService } from '../anmar-api.service';
import { AnmarBaseListComponent } from '../shared/anmar-base-list.component';
import { ANMAR_RESOURCES } from '../shared/anmar-resources';

@Component({
  selector: 'app-home-partners-list',
  templateUrl: './home-partners-list.component.html',
  styleUrls: ['./home-partners-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomePartnersListComponent extends AnmarBaseListComponent {
  config = ANMAR_RESOURCES['homePartners'];

  constructor(api: AnmarApiService, router: Router, toastr: ToastrService) {
    super(api, router, toastr);
  }
}
