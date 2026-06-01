import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { finalize, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CoreConfigService } from '@core/services/config.service';
import { localStorageService } from '@core/services/local-storage.service';
import { AuthenticationService } from 'app/auth/service';

@Component({
  selector: 'app-auth-login-v2',
  templateUrl: './auth-login-v2.component.html',
  styleUrls: ['./auth-login-v2.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AuthLoginV2Component implements OnInit {
  //  Public
  public coreConfig: any;
  public loginForm: UntypedFormGroup;
  public loading = false;
  public submitted = false;
  public returnUrl: string;
  public error = '';
  public passwordTextType: boolean;
  public currentLang = 'en';
  public content = {
    en: {
      language: 'العربية',
      title: 'Welcome back',
      subtitle: 'Sign in to continue to ANMAR dashboard.',
      emailLabel: 'Email',
      emailPlaceholder: 'admin@anmar.com',
      passwordLabel: 'Password',
      passwordPlaceholder: 'Enter your password',
      remember: 'Remember me',
      submit: 'Sign in',
      emailRequired: 'Email is required',
      emailInvalid: 'Email must be a valid email address',
      passwordRequired: 'Password is required'
    },
    ar: {
      language: 'English',
      title: 'مرحباً بعودتك',
      subtitle: 'سجّل الدخول للمتابعة إلى لوحة تحكم أنمار.',
      emailLabel: 'البريد الإلكتروني',
      emailPlaceholder: 'admin@anmar.com',
      passwordLabel: 'كلمة المرور',
      passwordPlaceholder: 'أدخل كلمة المرور',
      remember: 'تذكرني',
      submit: 'تسجيل الدخول',
      emailRequired: 'البريد الإلكتروني مطلوب',
      emailInvalid: 'يرجى إدخال بريد إلكتروني صحيح',
      passwordRequired: 'كلمة المرور مطلوبة'
    }
  };

  // Private
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   *
   * @param {CoreConfigService} _coreConfigService
   */
  constructor(
    private _coreConfigService: CoreConfigService,
    private _formBuilder: UntypedFormBuilder,
    private _route: ActivatedRoute,
    private _router: Router,
    private _translateService: TranslateService,
    private _localStorage: localStorageService,
    private _authenticationService: AuthenticationService,
    @Inject(DOCUMENT) private _document: Document
  ) {
    this._unsubscribeAll = new Subject();

    // Configure the layout
    this._coreConfigService.config = {
      layout: {
        navbar: {
          hidden: true
        },
        menu: {
          hidden: true
        },
        footer: {
          hidden: true
        },
        customizer: false,
        enableLocalStorage: false
      }
    };
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  get isArabic(): boolean {
    return this.currentLang === 'ar';
  }

  get t() {
    return this.content[this.isArabic ? 'ar' : 'en'];
  }

  /**
   * Toggle password
   */
  togglePasswordTextType() {
    this.passwordTextType = !this.passwordTextType;
  }

  toggleLanguage(): void {
    this.applyLanguage(this.isArabic ? 'en' : 'ar');
  }

  applyLanguage(lang: 'en' | 'ar'): void {
    this.currentLang = lang;
    this._translateService.use(lang);
    this._localStorage.setItem('currentLang', lang);
    this._localStorage.setItem('selectedLanguage', lang);
    this._localStorage.setItem('lang', lang);

    const htmlTag = this._document.documentElement;

    htmlTag.setAttribute('lang', lang);
    htmlTag.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  }

  onSubmit() {
    this.submitted = true;
    this.error = '';

    if (this.loginForm.invalid) {
      return;
    }

    const { email, password } = this.loginForm.getRawValue();
    this.loading = true;

    this._authenticationService
      .login(email, password)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: () => {
          this._router.navigateByUrl(this.returnUrl || '/');
        },
        error: err => {
          this.error =
            err?.error?.message ||
            err?.error?.errors?.email?.[0] ||
            err?.error?.errors?.password?.[0] ||
            'Login failed. Please check your credentials and try again.';
        }
      });
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    this.loginForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    this.applyLanguage((this._localStorage.getItem('currentLang') as 'en' | 'ar') || 'en');

    // get return url from route parameters or default to '/'
    this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';

    // Subscribe to config changes
    this._coreConfigService.config.pipe(takeUntil(this._unsubscribeAll)).subscribe(config => {
      this.coreConfig = config;
    });
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
