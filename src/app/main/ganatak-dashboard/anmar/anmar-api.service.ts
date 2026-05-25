import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnmarApiService {
  private readonly baseUrl = (environment as any).dashboardApiBase || (environment as any).apiBaseUrl || (environment as any).productionDomain || 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  private buildHeaders(language = 'en'): HttpHeaders {
    return new HttpHeaders({
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Accept-Language': language
    });
  }

  private buildUrl(endpoint: string): string {
    const normalizedBase = this.baseUrl.replace(/\/+$/, '');
    const normalizedEndpoint = endpoint.startsWith('/') ? endpoint : '/' + endpoint;
    return normalizedBase + normalizedEndpoint;
  }

  list(endpoint: string, language = 'en'): Observable<any> {
    return this.http.get(this.buildUrl(endpoint), { headers: this.buildHeaders(language) });
  }

  getById(endpoint: string, id: string | number, language = 'en'): Observable<any> {
    return this.http.get(this.buildUrl(endpoint + '/' + id), { headers: this.buildHeaders(language) });
  }

  create(endpoint: string, payload: any, language = 'en'): Observable<any> {
    return this.http.post(this.buildUrl(endpoint), payload, { headers: this.buildHeaders(language) });
  }

  update(endpoint: string, id: string | number, payload: any, language = 'en'): Observable<any> {
    return this.http.put(this.buildUrl(endpoint + '/' + id), payload, { headers: this.buildHeaders(language) });
  }

  patch(endpoint: string, id: string | number, payload: any, language = 'en'): Observable<any> {
    return this.http.patch(this.buildUrl(endpoint + '/' + id), payload, { headers: this.buildHeaders(language) });
  }

  delete(endpoint: string, id: string | number, language = 'en'): Observable<any> {
    return this.http.delete(this.buildUrl(endpoint + '/' + id), { headers: this.buildHeaders(language) });
  }

  extractCollection(response: any): any[] {
    if (Array.isArray(response)) return response;
    if (Array.isArray(response?.data)) return response.data;
    if (Array.isArray(response?.result)) return response.result;
    if (response?.data && typeof response.data === 'object') return [response.data];
    return [];
  }

  extractItem(response: any): any {
    if (response?.data !== undefined) return response.data;
    return response;
  }
}
