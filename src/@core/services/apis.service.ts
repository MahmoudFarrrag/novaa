import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs';
import {  map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from 'environments/environment';

interface ApiResponse {
  data: any;  // Define the type of 'data' based on your API response structure, e.g., `any[]` or a specific shape.
}

@Injectable({
  providedIn: 'root'
})

export class ApisService {
  apiUrl: string;

 
  
  // domain
  private domain = environment.productionDomain;

  
  DepartmentsAdd: any[] = [];
  password: any[] = [];
  email: any[] = [];


  constructor(private http: HttpClient,private router: Router) {}



  company() {
    return this.http.post(this.domain + '/dashboard/companies',{});
  }
 

  requestAds():Observable<any> { 
    return this.http.post<any>(this.domain +'user-sliders',{});
  }
  
  // levels(): Observable<any> {
  //   return this.authenticatedGet(
  //     `${this.domain}/api/dashboard-auth-api/levels`
  //   );
  // }

  // article() {
  //   return this.http.post(this.domain + '/articles',{});
  // }
 
  article(): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.domain + 'articles', {});
  }
  
  store(): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.domain + 'active-store-products', {});
  }
  users(): Observable<any> {
    return this.http.post<any>(this.domain + 'user/login', {});
  }
  companies(service_id: any): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.domain + 'service-companies', {service_id: service_id});
  }
  //Consulting List
  requestConsultations() : Observable<ApiResponse> {
    //waiting for the token
    // const Authorization = '1myQSGIIuD22gI3iruJXWOILoysWAOtF02y1P7XX' 
    // const httpheaders :HttpHeaders = new HttpHeaders ().set(
    //   'Authorization' , `Bearer ${Authorization}`
    // )
    return this.http.post<ApiResponse>(this.domain+ 'user/user-consultants', {} )
  }
 //edit consultation
  requestConsultationDetail(consulting_id : any): Observable<ApiResponse>{ 
    return this.http.post<ApiResponse>(this.domain+ 'user/consultant-details' ,{consulting_id:consulting_id} )
  }
  //make consultation
  requestConsultationBook() : Observable<ApiResponse> {  
    const headers = HttpHeaders
    return this.http.post<ApiResponse>(this.domain+'user/make-consultant',{})
  }
  
  // companyRate(companyId: any): Observable<any> {
  //   return this.http.post(`${this.domain}/dashboard/company-rates`, { companyId: companyId });
  // }

 
  // Login(email: any, password: any) {
  //       const headers = new HttpHeaders().set('Content-Type', 'application/json');

  //   return this.http.post('https://qaiim.newegyptgroup.com/api/dashboard/admin-login', { email, password }, {headers});
  // }
 

  // removeDepartment(departmentId: any): Observable<any> {
  //   return this.http.post(`${this.domain}/dashboard/remove-department`,{departmentId});
  // }
  
}




