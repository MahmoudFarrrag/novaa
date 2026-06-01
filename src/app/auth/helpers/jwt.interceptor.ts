import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'environments/environment';
import { AuthenticationService } from 'app/auth/service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  /**
   *
   * @param {AuthenticationService} _authenticationService
   */
  constructor(private _authenticationService: AuthenticationService) {}

  /**
   * Add auth header with jwt if user is logged in and request is to api url
   * @param request
   * @param next
   */
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const currentUser = this._authenticationService.currentUserValue;
    const savedToken = currentUser?.token || localStorage.getItem('authToken');
    const dashboardApiBase = ((environment as any).dashboardApiBase || '').replace(/\/+$/, '');
    const isProtectedDashboardRequest =
      request.url.startsWith(`${dashboardApiBase}/dashboard`) || request.url.startsWith(`${dashboardApiBase}/logout`);

    if (savedToken && isProtectedDashboardRequest) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${savedToken}`
        }
      });
    }

    return next.handle(request);
  }
}
