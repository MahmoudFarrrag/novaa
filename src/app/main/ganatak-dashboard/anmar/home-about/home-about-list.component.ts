import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AnmarApiService } from '../anmar-api.service';
import { AnmarBaseListComponent } from '../shared/anmar-base-list.component';
import { ANMAR_RESOURCES } from '../shared/anmar-resources';

@Component({
  selector: 'app-home-about-list',
  templateUrl: './home-about-list.component.html',
  styleUrls: ['./home-about-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeAboutListComponent extends AnmarBaseListComponent {
  config = ANMAR_RESOURCES['homeAbout'];

  constructor(api: AnmarApiService, router: Router, toastr: ToastrService) {
    super(api, router, toastr);
  }
}
