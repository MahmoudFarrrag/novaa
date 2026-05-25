import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AnmarApiService } from '../anmar-api.service';
import { AnmarBaseListComponent } from '../shared/anmar-base-list.component';
import { ANMAR_RESOURCES } from '../shared/anmar-resources';

@Component({
  selector: 'app-about-value-list',
  templateUrl: './about-value-list.component.html',
  styleUrls: ['./about-value-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AboutValueListComponent extends AnmarBaseListComponent {
  config = ANMAR_RESOURCES['aboutValue'];

  constructor(api: AnmarApiService, router: Router, toastr: ToastrService) {
    super(api, router, toastr);
  }
}
