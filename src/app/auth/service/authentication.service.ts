import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'environments/environment';
import { User, Role } from 'app/auth/models';
import { ToastrService } from 'ngx-toastr';

interface LoginResponse {
  message: string;
  token: string;
  token_type: string;
  user: {
    id: number;
    name: string;
    email: string;
  };
}

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  //public
  public currentUser: Observable<User>;

  //private
  private currentUserSubject: BehaviorSubject<User>;

  /**
   *
   * @param {HttpClient} _http
   * @param {ToastrService} _toastrService
   */
  constructor(private _http: HttpClient, private _toastrService: ToastrService) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  // getter: currentUserValue
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  /**
   *  Confirms if user is admin
   */
  get isAdmin() {
    return this.currentUser && this.currentUserSubject.value.role === Role.Admin;
  }

  /**
   *  Confirms if user is client
   */
  get isClient() {
    return this.currentUser && this.currentUserSubject.value.role === Role.Client;
  }

  /**
   * User login
   *
   * @param email
   * @param password
   * @returns user
   */
  login(email: string, password: string) {
    return this._http
      .post<LoginResponse>(`${environment.dashboardApiBase}/login`, { email, password })
      .pipe(
        map(response => {
          if (response && response.token) {
            const currentUser: User = {
              id: response.user.id,
              email: response.user.email,
              firstName: response.user.name,
              lastName: '',
              avatar: '',
              role: Role.Admin,
              token: response.token,
              password: ''
            };

            localStorage.setItem('authToken', response.token);
            localStorage.setItem('currentUser', JSON.stringify(currentUser));

            setTimeout(() => {
              this._toastrService.success(
                'You have successfully logged in to ANMAR dashboard.',
                'Welcome, ' + response.user.name,
                { toastClass: 'toast ngx-toastr', closeButton: true }
              );
            }, 500);

            this.currentUserSubject.next(currentUser);
          }

          return response;
        })
      );
  }

  setCurrentValue(next) {
    this.currentUserSubject.next(next);
  }
  /**
   * User logout
   *
   */
  logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('authToken');
    this.currentUserSubject.next(null);
  }
}
