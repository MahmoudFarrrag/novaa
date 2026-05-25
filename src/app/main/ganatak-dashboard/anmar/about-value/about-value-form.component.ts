import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AnmarApiService } from '../anmar-api.service';
import { AnmarBaseFormComponent } from '../shared/anmar-base-form.component';
import { ANMAR_RESOURCES } from '../shared/anmar-resources';

@Component({
  selector: 'app-about-value-form',
  templateUrl: './about-value-form.component.html',
  styleUrls: ['./about-value-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AboutValueFormComponent extends AnmarBaseFormComponent {
  config = ANMAR_RESOURCES['aboutValue'];

  constructor(fb: FormBuilder, api: AnmarApiService, route: ActivatedRoute, router: Router, toastr: ToastrService) {
    super(fb, api, route, router, toastr);
  }
}
