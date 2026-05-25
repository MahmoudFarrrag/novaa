import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AnmarApiService } from '../anmar-api.service';
import { AnmarBaseListComponent } from '../shared/anmar-base-list.component';
import { ANMAR_RESOURCES } from '../shared/anmar-resources';

@Component({
  selector: 'app-contact-messages-list',
  templateUrl: './contact-messages-list.component.html',
  styleUrls: ['./contact-messages-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContactMessagesListComponent extends AnmarBaseListComponent {
  config = ANMAR_RESOURCES['contactMessages'];

  constructor(api: AnmarApiService, router: Router, toastr: ToastrService) {
    super(api, router, toastr);
  }
}
