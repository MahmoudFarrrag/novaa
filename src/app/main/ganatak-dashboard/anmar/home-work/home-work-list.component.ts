import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AnmarApiService } from '../anmar-api.service';
import { AnmarBaseListComponent } from '../shared/anmar-base-list.component';
import { ANMAR_RESOURCES } from '../shared/anmar-resources';

@Component({
  selector: 'app-home-work-list',
  templateUrl: './home-work-list.component.html',
  styleUrls: ['./home-work-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeWorkListComponent extends AnmarBaseListComponent {
  config = ANMAR_RESOURCES['homeWork'];

  constructor(api: AnmarApiService, router: Router, toastr: ToastrService) {
    super(api, router, toastr);
  }
}
