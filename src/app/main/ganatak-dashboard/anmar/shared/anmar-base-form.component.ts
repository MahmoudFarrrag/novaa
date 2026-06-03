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
  imagePreviewUrls: Record<string, string> = {};
  selectedFiles: Record<string, File | null> = {};
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

  isImageField(field: AnmarFieldConfig): boolean {
    return field.name === 'image';
  }

  onFileSelected(event: Event, fieldName: string): void {
    const input = event.target as HTMLInputElement | null;
    const file = input?.files?.[0] || null;
    this.selectedFiles[fieldName] = file;

    if (file) {
      this.form.get(fieldName)?.setValue(file.name);
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreviewUrls[fieldName] = String(reader.result || '');
      };
      reader.readAsDataURL(file);
      return;
    }

    this.imagePreviewUrls[fieldName] = this.isEditMode ? this.imagePreviewUrls[fieldName] || '' : '';
  }

  getImagePreview(fieldName: string): string {
    const preview = this.imagePreviewUrls[fieldName] || '';
    return this.api.getImageUrl(preview);
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
          if (this.isImageField(field) && value) {
            this.imagePreviewUrls[field.name] = this.api.getImageUrl(String(value));
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
    let hasSelectedFile = false;

    this.config.fields.forEach((field) => {
      let value = formValue[field.name];

      if (field.type === 'array-text') {
        value = String(value || '')
          .split(',')
          .map((entry) => entry.trim())
          .filter(Boolean);
      }

      if (field.type === 'number') {
        value = value === '' || value === null || value === undefined ? null : Number(value);
      }

      if (field.type === 'checkbox') {
        value = !!value;
      }

      if (this.isImageField(field)) {
        const selectedFile = this.selectedFiles[field.name];
        if (selectedFile) {
          payload[field.name] = selectedFile;
          hasSelectedFile = true;
        } else if (value !== '' && value !== null && value !== undefined) {
          payload[field.name] = value;
        }
        return;
      }

      payload[field.name] = value;
    });

    return hasSelectedFile ? this.toFormData(payload) : payload;
  }

  private toFormData(payload: Record<string, any>): FormData {
    const formData = new FormData();

    Object.entries(payload).forEach(([key, value]) => {
      if (value === null || value === undefined || value === '') {
        return;
      }

      if (Array.isArray(value)) {
        value.forEach((entry) => formData.append(`${key}[]`, String(entry)));
        return;
      }

      if (value instanceof File) {
        formData.append(key, value);
        return;
      }

      if (typeof value === 'boolean') {
        formData.append(key, value ? '1' : '0');
        return;
      }

      formData.append(key, String(value));
    });

    return formData;
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
