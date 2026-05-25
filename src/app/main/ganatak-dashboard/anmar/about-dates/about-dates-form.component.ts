import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AnmarApiService } from '../anmar-api.service';
import { AnmarBaseFormComponent } from '../shared/anmar-base-form.component';
import { ANMAR_RESOURCES } from '../shared/anmar-resources';

@Component({
  selector: 'app-about-dates-form',
  templateUrl: './about-dates-form.component.html',
  styleUrls: ['./about-dates-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AboutDatesFormComponent extends AnmarBaseFormComponent {
  config = ANMAR_RESOURCES['aboutDates'];

  constructor(fb: FormBuilder, api: AnmarApiService, route: ActivatedRoute, router: Router, toastr: ToastrService) {
    super(fb, api, route, router, toastr);
  }
}
