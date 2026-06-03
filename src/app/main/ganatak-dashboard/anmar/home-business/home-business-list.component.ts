import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AnmarApiService } from '../anmar-api.service';
import { AnmarBaseListComponent } from '../shared/anmar-base-list.component';
import { ANMAR_RESOURCES } from '../shared/anmar-resources';

@Component({
  selector: 'app-home-business-list',
  templateUrl: './home-business-list.component.html',
  styleUrls: ['./home-business-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeBusinessListComponent extends AnmarBaseListComponent {
  config = ANMAR_RESOURCES['homeBusiness'];

  constructor(api: AnmarApiService, router: Router, toastr: ToastrService) {
    super(api, router, toastr);
  }
}
