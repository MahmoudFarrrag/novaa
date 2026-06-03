import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

import { localStorageService } from '@core/services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AppLanguageService {
  private readonly _language$ = new BehaviorSubject<'en' | 'ar'>('en');

  constructor(
    private _translateService: TranslateService,
    private _localStorage: localStorageService,
    @Inject(DOCUMENT) private _document: Document
  ) {}

  get language$() {
    return this._language$.asObservable();
  }

  get currentLanguage(): 'en' | 'ar' {
    return this._language$.value;
  }

  initLanguage(defaultLang: 'en' | 'ar' = 'en'): 'en' | 'ar' {
    const savedLang = this.normalizeLanguage(
      this._localStorage.getItem('currentLang') ||
        this._localStorage.getItem('lang') ||
        this._localStorage.getItem('selectedLanguage') ||
        this._translateService.currentLang ||
        defaultLang
    );

    this.applyLanguage(savedLang);

    return savedLang;
  }

  setLanguage(lang: string): void {
    this.applyLanguage(this.normalizeLanguage(lang));
  }

  private applyLanguage(lang: 'en' | 'ar'): void {
    this._translateService.setDefaultLang(lang);
    this._translateService.use(lang);
    this.persistLanguage(lang);
    this.updateDocumentDirection(lang);
    this._language$.next(lang);
  }

  private persistLanguage(lang: 'en' | 'ar'): void {
    this._localStorage.setItem('currentLang', lang);
    this._localStorage.setItem('lang', lang);
    this._localStorage.setItem('selectedLanguage', lang);
  }

  private updateDocumentDirection(lang: 'en' | 'ar'): void {
    const htmlTag = this._document.documentElement;
    const bodyTag = this._document.body;
    const direction = lang === 'ar' ? 'rtl' : 'ltr';
    const textAlign = lang === 'ar' ? 'right' : 'left';

    htmlTag.setAttribute('lang', lang);
    htmlTag.setAttribute('dir', direction);
    htmlTag.style.direction = direction;
    htmlTag.style.textAlign = textAlign;

    if (bodyTag) {
      bodyTag.style.direction = direction;
      bodyTag.style.textAlign = textAlign;
    }
  }

  private normalizeLanguage(lang: string | null | undefined): 'en' | 'ar' {
    return lang === 'ar' ? 'ar' : 'en';
  }
}
