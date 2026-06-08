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

  isLinkColumn(column: string): boolean {
    return ['website_link', 'android_link', 'ios_link'].includes(column);
  }

  isStepsColumn(column: string): boolean {
    return column === 'steps';
  }

  getLinkHref(value: any): string {
    const link = String(value || '').trim();

    if (!link) {
      return '';
    }

    if (/^https?:\/\//i.test(link)) {
      return link;
    }

    return `https://${link.replace(/^\/+/, '')}`;
  }

  getLinkDisplay(value: any): string {
    const link = String(value || '').trim();
    return link ? this.truncateText(link, 40) : '-';
  }

  getStepsCount(value: any): number {
    return Array.isArray(value) ? value.length : 0;
  }

  getStepsDisplay(value: any): string {
    const count = this.getStepsCount(value);
    return count ? `${this.translate.instant('ANMAR_PAGES.FIELDS.STEPS_COUNT')}: ${count}` : '-';
  }

  getStepsTitle(value: any): string {
    if (!Array.isArray(value) || !value.length) {
      return '-';
    }

    return value
      .map((step: any) => {
        const number = step?.step_number ?? 0;
        const title = String(step?.title_en || step?.title_ar || '').trim();
        return title ? `${number}: ${title}` : `${number}`;
      })
      .join(' | ');
  }

  override getRawValue(row: any, column: string): any {
    if (this.isStepsColumn(column)) {
      return this.getStepsTitle(row?.[column]);
    }

    return super.getRawValue(row, column);
  }

  override getCellDisplay(row: any, column: string): string {
    if (this.isStepsColumn(column)) {
      return this.getStepsDisplay(row?.[column]);
    }

    return super.getCellDisplay(row, column);
  }

  override getCellTitle(row: any, column: string): string {
    if (this.isStepsColumn(column)) {
      return this.getStepsTitle(row?.[column]);
    }

    return super.getCellTitle(row, column);
  }
}
