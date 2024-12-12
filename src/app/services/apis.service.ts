import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import { Observable} from 'rxjs';
import {  map } from 'rxjs/operators';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ApisService {

  constructor(private http: HttpClient,private router: Router) {}


//   Login(email: any, password: any) {
//     const headers = new HttpHeaders().set('Content-Type', 'application/json');

// return this.http.post('https://qaiim.newegyptgroup.com/api/dashboard/admins', { email, password });
// }
Login(email: any, password: any) {
  const headers = new HttpHeaders().set('Content-Type', 'application/json');

return this.http.post('https://api.wajad.io/public/api/dashboard-api/login', { email, password }, {headers});
}

Students() {
  return this.http.post('https://api.wajad.io/public/api/dashboard-auth-api/students',{});
}
Devices() {
  return this.http.post('',{});
}
Countries() {
  return this.http.post('',{});
}
Onboardings() {
  return this.http.post('',{});
}
ActivationCodes() {
  return this.http.post('',{});
}
}
