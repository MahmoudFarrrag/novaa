import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AnmarApiService } from '../anmar-api.service';
import { AnmarBaseListComponent } from '../shared/anmar-base-list.component';
import { ANMAR_RESOURCES } from '../shared/anmar-resources';

@Component({
  selector: 'app-about-vision-list',
  templateUrl: './about-vision-list.component.html',
  styleUrls: ['./about-vision-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AboutVisionListComponent extends AnmarBaseListComponent {
  config = ANMAR_RESOURCES['aboutVision'];

  constructor(api: AnmarApiService, router: Router, toastr: ToastrService) {
    super(api, router, toastr);
  }
}
