import { Component, ViewEncapsulation } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AnmarApiService } from '../anmar-api.service';
import { AnmarBaseFormComponent } from '../shared/anmar-base-form.component';
import { AnmarFieldConfig } from '../shared/anmar-resource.types';
import { ANMAR_RESOURCES } from '../shared/anmar-resources';

@Component({
  selector: 'app-home-work-form',
  templateUrl: './home-work-form.component.html',
  styleUrls: ['./home-work-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeWorkFormComponent extends AnmarBaseFormComponent {
  config = ANMAR_RESOURCES['homeWork'];

  constructor(fb: FormBuilder, api: AnmarApiService, route: ActivatedRoute, router: Router, toastr: ToastrService) {
    super(fb, api, route, router, toastr);
  }

  override buildForm(): void {
    super.buildForm();
    this.form.addControl('steps', this.fb.array([]));
  }

  override loadRecord(id: string): void {
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
        this.setSteps(item?.steps);
        this.loading = false;
      },
      error: (error) => {
        this.loading = false;
        this.errorMessage = error?.error?.message || this.translate.instant('ANMAR_PAGES.COMMON.ERROR');
        this.toastr.error(this.errorMessage, this.translate.instant(this.getModuleTranslateKey()));
      }
    });
  }

  override buildPayload(): any {
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

    payload.steps = this.normalizeSteps(formValue.steps);

    return hasSelectedFile ? this.toFormDataWithSteps(payload) : payload;
  }

  get stepsArray(): FormArray {
    return this.form.get('steps') as FormArray;
  }

  get stepsControls(): FormGroup[] {
    return this.stepsArray.controls as FormGroup[];
  }

  addStep(step: any = null): void {
    const nextStepNumber = this.stepsArray.length;
    this.stepsArray.push(this.createStepGroup(step || { step_number: nextStepNumber }));
  }

  removeStep(index: number): void {
    this.stepsArray.removeAt(index);
  }

  isStepInvalid(index: number, fieldName: string): boolean {
    const control = this.stepsArray.at(index)?.get(fieldName);
    return !!control && control.invalid && (control.dirty || control.touched);
  }

  getStandardFields(): AnmarFieldConfig[] {
    return this.config.fields;
  }

  private setSteps(steps: any): void {
    this.stepsArray.clear();

    if (!Array.isArray(steps) || !steps.length) {
      return;
    }

    [...steps]
      .sort((a, b) => Number(a?.step_number || 0) - Number(b?.step_number || 0))
      .forEach((step) => this.stepsArray.push(this.createStepGroup(step)));
  }

  private createStepGroup(step: any = {}): FormGroup {
    return this.fb.group({
      step_number: [step?.step_number ?? this.stepsArray.length, [Validators.required, Validators.min(0)]],
      title_ar: [step?.title_ar ?? '', [Validators.required]],
      title_en: [step?.title_en ?? '', [Validators.required]],
      description_ar: [step?.description_ar ?? '', [Validators.required]],
      description_en: [step?.description_en ?? '', [Validators.required]]
    });
  }

  private normalizeSteps(steps: any): any[] {
    if (!Array.isArray(steps)) {
      return [];
    }

    return steps
      .map((step) => ({
        step_number: step?.step_number === '' || step?.step_number === null || step?.step_number === undefined ? 0 : Number(step.step_number),
        title_ar: String(step?.title_ar || '').trim(),
        title_en: String(step?.title_en || '').trim(),
        description_ar: String(step?.description_ar || '').trim(),
        description_en: String(step?.description_en || '').trim()
      }))
      .filter((step) => step.title_ar || step.title_en || step.description_ar || step.description_en)
      .sort((a, b) => a.step_number - b.step_number);
  }

  private toFormDataWithSteps(payload: Record<string, any>): FormData {
    const formData = new FormData();

    Object.entries(payload).forEach(([key, value]) => {
      if (key === 'steps') {
        if (Array.isArray(value)) {
          value.forEach((step, index) => {
            Object.entries(step || {}).forEach(([stepKey, stepValue]) => {
              if (stepValue === null || stepValue === undefined || stepValue === '') {
                return;
              }
              formData.append(`steps[${index}][${stepKey}]`, String(stepValue));
            });
          });
        }
        return;
      }

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
}
