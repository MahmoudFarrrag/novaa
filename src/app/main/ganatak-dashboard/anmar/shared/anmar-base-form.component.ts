import { Directive, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { AnmarApiService } from '../anmar-api.service';
import { AnmarFieldConfig, AnmarResourceConfig } from './anmar-resource.types';

@Directive()
export abstract class AnmarBaseFormComponent implements OnInit {
  abstract config: AnmarResourceConfig;

  form!: FormGroup;
  loading = false;
  submitting = false;
  isEditMode = false;
  recordId: string | null = null;
  errorMessage = '';
  protected translate = inject(TranslateService);

  protected constructor(
    protected fb: FormBuilder,
    protected api: AnmarApiService,
    protected route: ActivatedRoute,
    protected router: Router,
    protected toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.recordId = this.route.snapshot.paramMap.get('id');
    this.isEditMode = !!this.recordId;
    this.buildForm();

    if (this.isEditMode && this.recordId) {
      this.loadRecord(this.recordId);
    }
  }

  buildForm(): void {
    const controls: Record<string, FormControl> = {};
    this.config.fields.forEach((field) => {
      controls[field.name] = this.fb.control(this.getDefaultValue(field), field.required ? [Validators.required] : []);
    });
    this.form = this.fb.group(controls);
  }

  getDefaultValue(field: AnmarFieldConfig): any {
    if (field.type === 'checkbox') {
      return false;
    }
    return '';
  }

  loadRecord(id: string): void {
    this.loading = true;
    this.api.getById(this.config.endpoint, id).subscribe({
      next: (response: any) => {
        const item = this.api.extractItem(response) || {};
        const patch: Record<string, any> = {};
        this.config.fields.forEach((field) => {
          let value = item?.[field.name];
          if (field.type === 'array-text' && Array.isArray(value)) {
            value = value.join(', ');
          }
          if (field.type === 'checkbox') {
            value = !!value;
          }
          if (field.type === 'date' && value) {
            value = String(value).slice(0, 10);
          }
          patch[field.name] = value ?? this.getDefaultValue(field);
        });
        this.form.patchValue(patch);
        this.loading = false;
      },
      error: (error) => {
        this.loading = false;
        this.errorMessage = error?.error?.message || this.translate.instant('ANMAR_PAGES.COMMON.ERROR');
        this.toastr.error(this.errorMessage, this.translate.instant(this.getModuleTranslateKey()));
      }
    });
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.toastr.error(this.translate.instant('ANMAR_PAGES.COMMON.REQUIRED_FIELD'), this.translate.instant(this.getModuleTranslateKey()));
      return;
    }

    this.submitting = true;
    const payload = this.buildPayload();
    const request = this.isEditMode && this.recordId
      ? this.api.update(this.config.endpoint, this.recordId, payload)
      : this.api.create(this.config.endpoint, payload);

    request.subscribe({
      next: () => {
        this.submitting = false;
        this.toastr.success(
          this.translate.instant(this.isEditMode ? 'ANMAR_PAGES.COMMON.UPDATED_SUCCESS' : 'ANMAR_PAGES.COMMON.CREATED_SUCCESS'),
          this.translate.instant(this.getModuleTranslateKey())
        );
        this.router.navigate(['/anmar', this.config.route]);
      },
      error: (error) => {
        this.submitting = false;
        this.toastr.error(error?.error?.message || this.translate.instant('ANMAR_PAGES.COMMON.ERROR'), this.translate.instant(this.getModuleTranslateKey()));
      }
    });
  }

  buildPayload(): any {
    const formValue = this.form.getRawValue();
    const payload: Record<string, any> = {};

    this.config.fields.forEach((field) => {
      let value = formValue[field.name];

      if (field.type === 'array-text') {
        value = String(value || '').split(',').map((entry) => entry.trim()).filter(Boolean);
      }

      if (field.type === 'number') {
        value = value === '' || value === null || value === undefined ? null : Number(value);
      }

      if (field.type === 'checkbox') {
        value = !!value;
      }

      payload[field.name] = value;
    });

    return payload;
  }

  cancel(): void {
    this.router.navigate(['/anmar', this.config.route]);
  }

  isInvalid(fieldName: string): boolean {
    const control = this.form.get(fieldName);
    return !!control && control.invalid && (control.dirty || control.touched);
  }

  normalizeOptions(field: AnmarFieldConfig): Array<{ label: string; value: string | number | boolean }> {
    return (field.options || []).map((option: any) => {
      if (typeof option === 'object' && option !== null && 'value' in option) {
        return { label: option.label || String(option.value), value: option.value };
      }
      return { label: String(option), value: option };
    });
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
