import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';
import { environment } from 'environments/environment.hmr';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  public isAllow: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  public authTokenKey = 'wajad_token';
  public allowTokenKey = 'isAllow';
  DecodedToken: any;
  private domain = environment.productionDomain;

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.checkToken();
  }

  private checkToken(): void {
    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem(this.authTokenKey);
      if (token) {
        this.loggedIn.next(true);
      }
    }
  }

  getAuthToken(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem(this.authTokenKey);
    }
    return null;
  }

  setAuthToken(token: string): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.authTokenKey, token);
      this.loggedIn.next(true);
    }
  }
  setAllowTokenKey(allow: string): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.allowTokenKey, allow);
      this.loggedIn.next(true);
    }
  }

  setCurrentUser(user: any): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('currentUser', JSON.stringify(user));
    }
  }

  setCurrentDevice(device: any): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('currentDevice', JSON.stringify(device));
    }
  }

  getCurrentDevice(): any {
    if (isPlatformBrowser(this.platformId)) {
      const device = localStorage.getItem('currentDevice');
      return device ? JSON.parse(device) : null;
    }
  }

  getCurrentUser(): any {
    if (isPlatformBrowser(this.platformId)) {
      const user = localStorage.getItem('currentUser');
      return user ? JSON.parse(user) : null;
    }
  }

  register(data: any) {
    const headers = new HttpHeaders({
      Accept: 'application/json',
      'Accept-Language': 'ar',
      'Accept-Encoding': 'gzip, deflate, br',
    });
    return this.http.post(this.domain + '/api/guest-api/register', data, {
      headers,
    });
  }

  activateAccount(data: any) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.getAuthToken()}`,
      Accept: 'application/json',
      'Accept-Language': 'ar',
      'Accept-Encoding': 'gzip, deflate, br',
    });
    return this.http.post(
      this.domain + '/api/auth-api/activate-account',
      data,
      {
        headers,
      }
    );
  }

  resendActivationCode(data: any) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.getAuthToken()}`,
      Accept: 'application/json',
      'Accept-Language': 'ar',
      'Accept-Encoding': 'gzip, deflate, br',
    });
    return this.http.post(
      this.domain + '/api/auth-api/resend-activatation-code',
      data,
      { headers }
    );
  }

  logout(formdata: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.getAuthToken()}`,
      Accept: 'application/json',
      'Accept-Language': 'ar',
      'Accept-Encoding': 'gzip, deflate, br',
    });
    this.loggedIn.next(false);
    return this.http.post(this.domain + '/api/auth-api/log-out', formdata, {
      headers,
    });
  }
}
