import { Directive, ViewChild, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { ColumnMode, DatatableComponent, SelectionType } from '@swimlane/ngx-datatable';
import { TranslateService } from '@ngx-translate/core';
import { AnmarApiService } from '../anmar-api.service';
import { AnmarResourceConfig } from './anmar-resource.types';

@Directive()
export abstract class AnmarBaseListComponent {
  abstract config: AnmarResourceConfig;

  rows: any[] = [];
  filteredRows: any[] = [];
  loading = false;
  deletingId: number | string | null = null;
  errorMessage = '';
  currentPage = 1;
  itemsPerPage = 10;
  totalItems = 0;
  ColumnMode = ColumnMode;
  SelectionType = SelectionType;
  protected translate = inject(TranslateService);

  @ViewChild(DatatableComponent) table?: DatatableComponent;

  protected constructor(
    protected api: AnmarApiService,
    protected router: Router,
    protected toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.loadRows();
  }

  loadRows(): void {
    this.loading = true;
    this.errorMessage = '';
    this.api.list(this.config.endpoint).subscribe({
      next: (response: any) => {
        const data = this.api.extractCollection(response);
        this.rows = data;
        this.filteredRows = [...data];
        this.totalItems = data.length;
        this.loading = false;
      },
      error: (error) => {
        this.loading = false;
        this.errorMessage = error?.error?.message || this.translate.instant('ANMAR_PAGES.COMMON.ERROR');
        this.toastr.error(this.errorMessage, this.translate.instant(this.getModuleTranslateKey()));
      }
    });
  }

  filterUpdate(event: Event): void {
    const input = event.target as HTMLInputElement;
    const value = (input?.value || '').trim().toLowerCase();

    if (!value) {
      this.filteredRows = [...this.rows];
    } else {
      this.filteredRows = this.rows.filter((row) =>
        this.config.columns.some((column) => String(this.getRawValue(row, column)).toLowerCase().includes(value))
      );
    }

    this.totalItems = this.filteredRows.length;
    if (this.table) {
      this.table.offset = 0;
    }
  }

  navigateToAdd(): void {
    this.router.navigate(['/anmar', this.config.route, 'add']);
  }

  navigateToEdit(id: number | string): void {
    this.router.navigate(['/anmar', this.config.route, 'edit', id]);
  }

  confirmDelete(id: number | string): void {
    Swal.fire({
      title: this.translate.instant('ANMAR_PAGES.COMMON.DELETE'),
      text: this.translate.instant('ANMAR_PAGES.COMMON.CONFIRM_DELETE'),
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#306ADA',
      cancelButtonColor: '#6c757d',
      confirmButtonText: this.translate.instant('ANMAR_PAGES.COMMON.DELETE'),
      cancelButtonText: this.translate.instant('ANMAR_PAGES.COMMON.CANCEL')
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteItem(id);
      }
    });
  }

  deleteItem(id: number | string): void {
    this.deletingId = id;
    this.api.delete(this.config.endpoint, id).subscribe({
      next: () => {
        this.toastr.success(this.translate.instant('ANMAR_PAGES.COMMON.DELETED_SUCCESS'), this.translate.instant(this.getModuleTranslateKey()));
        this.rows = this.rows.filter((item) => item?.id !== id);
        this.filteredRows = this.filteredRows.filter((item) => item?.id !== id);
        this.totalItems = this.filteredRows.length;
        this.deletingId = null;
      },
      error: (error) => {
        this.deletingId = null;
        this.toastr.error(error?.error?.message || this.translate.instant('ANMAR_PAGES.COMMON.ERROR'), this.translate.instant(this.getModuleTranslateKey()));
      }
    });
  }

  getRawValue(row: any, column: string): any {
    const value = row?.[column];
    if (Array.isArray(value)) {
      return value.join(', ');
    }
    if (value === null || value === undefined || value === '') {
      return '-';
    }
    return value;
  }

  getCellDisplay(row: any, column: string): string {
    const value = row?.[column];

    if (column === 'is_active') {
      return value
        ? this.translate.instant('ANMAR_PAGES.COMMON.ACTIVE')
        : this.translate.instant('ANMAR_PAGES.COMMON.INACTIVE');
    }

    if (Array.isArray(value)) {
      return value.join(', ');
    }

    if (typeof value === 'boolean') {
      return value
        ? this.translate.instant('ANMAR_PAGES.COMMON.YES')
        : this.translate.instant('ANMAR_PAGES.COMMON.NO');
    }

    if (value === null || value === undefined || value === '') {
      return '-';
    }

    return String(value);
  }

  isImageColumn(column: string): boolean {
    return column === 'image';
  }

  getImageSource(value: any): string {
    const imageUrl = this.api.getImageUrl(String(value || ''));
    return imageUrl || 'assets/images/logo/shap.png';
  }

  onImageError(event: Event): void {
    const img = event.target as HTMLImageElement | null;
    if (!img) {
      return;
    }

    const fallback = 'assets/images/logo/shap.png';
    if (!img.src.includes('/assets/images/logo/shap.png')) {
      img.src = fallback;
    }
  }

  getModuleTranslateKey(): string {
    return `ANMAR_PAGES.MODULES.${this.toKey(this.config.route)}`;
  }

  getFieldTranslateKey(fieldName: string): string {
    return `ANMAR_PAGES.FIELDS.${this.toKey(fieldName)}`;
  }

  private toKey(value: string): string {
    return value.replace(/-/g, '_').toUpperCase();
  }
}
