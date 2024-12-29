import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import {  catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from 'environments/environment';
import { localStorageService } from './local-storage.service';
import { AuthService } from './auth.service';
import {   retry } from 'rxjs/operators';
import { ScrollbarHelper } from '@swimlane/ngx-datatable';

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


  constructor(private http: HttpClient,private router: Router, private authService: AuthService,
    private localStorage: localStorageService
  ) {}

  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.status === 401) {
      const deviceId = this.authService.getCurrentDevice()?.id;
      this.authService.logout(deviceId);
      this.localStorage.clear();
      this.router.navigate(['/auth/login']); 
    }
    return throwError(error);
  }

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
  
 
  about(): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.domain + 'about-app', {});
  }
 
  getCountry(): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.domain + 'countries', {});
  }
 
  LoginOtp(data: any, token: any): Observable<any> {
    const header = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(`${this.domain}user/active-profile`, data, { headers: header });
  }
  completeProfile(token: any, data: any) {
    return this.http.post(`${this.domain}user/update-profile`, data, { headers: new HttpHeaders().set('Authorization', `Bearer ${token}`) });
  }
  countries(): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.domain + 'countries', {});
  }
 
  ganatakCommunity(): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.domain + 'community-posts', {});
  }

  plantCards(): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.domain + 'user/make-order', {});
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
    return this.http.post<ApiResponse>(this.domain+ 'user/make-consultant' ,{consulting_id:consulting_id} )
  }
  //make consultation
  requestConsultationBook() : Observable<ApiResponse> {  
    const headers = HttpHeaders
    return this.http.post<ApiResponse>(this.domain+'user/consultant-details',{})
  }
  
  requestTerms(): Observable<ApiResponse> { 
    return this.http.post<ApiResponse>(this.domain+'terms-app' , {})
  }

  requestTagArticles(tag_id :any) : Observable<ApiResponse> { 
    //authorization needed
    
    return this.http.post<ApiResponse>(this.domain+'tag-articles',{tag_id:tag_id})
  }

  requestTagProducts(tag_id:any):Observable<ApiResponse>{
    //authorization needed 
    return this.http.post<ApiResponse>(this.domain+'tag-products',{tag_id:tag_id})
  }

  requestNotificationsCount():Observable<ApiResponse>{
    //authorization needed 
    return this.http.post<ApiResponse>(this.domain+'user-notifications-count',{})
  }

  requestNotifications(page:any):Observable<ApiResponse>{
    //authorization needed  
    return this.http.post<ApiResponse>(this.domain+'user-notifications',{page:page})
  }

  requestNotificationSee(notification_id:any):Observable<ApiResponse>{
    //authorization needed  
    return this.http.post<ApiResponse>(this.domain+'user-seen-notifications',{notification_id:notification_id})
  }

  requestServiceCategories():Observable<ApiResponse> { 
    return this.http.post<ApiResponse>(this.domain+'services' ,{})

  }

  requestServiceSubCategories():Observable<ApiResponse>{ 
    return this.http.post<ApiResponse>(this.domain+'sub-services',{})
  }

  requestOffers(page:number , category_id:string , discount_sort:string ,keyword:string):Observable<ApiResponse>{ 
    return this.http.post<ApiResponse>(this.domain+'search-offers',
      {page:page , category_id:category_id , discount_sort:discount_sort , keyword:keyword})
  }
requestHomeOffers():Observable<ApiResponse>{
  return this.http.post<ApiResponse>(this.domain+'home-products',{})
}

requestCategoryOffers(category_id:number):Observable<ApiResponse>{
  return this.http.post<ApiResponse>(this.domain+'category-offer',{category_id:category_id})
}

requestCancelReasons():Observable<ApiResponse>{ 
  return this.http.post<ApiResponse>(this.domain+'user/cancelOrderReasons',{})
}
requestCancelOrder(order_id:number , cancellation_reason_id:number ):Observable<ApiResponse>{
  return this.http.post<ApiResponse>(this.domain+'user/cancelOrder', 
    {order_id:order_id , cancellation_reason_id:cancellation_reason_id})
}
requestMarketCategories():Observable<ApiResponse>{ 
  return this.http.post<ApiResponse>(this.domain+'categories-list',{})
}

requestShops():Observable<ApiResponse>{ 
  return this.http.post<ApiResponse>(this.domain+'category-stores',{})
}
requestShopProductsCategories(shop_id:number):Observable<ApiResponse>{
  return this.http.post<ApiResponse>(this.domain+'store-id-categories',{shop_id:shop_id})
}

requestShopProducts():Observable<ApiResponse>{ 
  return this.http.post<ApiResponse>(this.domain+'store-category-id-products',{})
}
requestProducts():Observable<ApiResponse>{ 
  return this.http.post<ApiResponse>(this.domain+'category-store-id-products',{})
}
requestArticleCategories():Observable<ApiResponse>{ 
  return this.http.post<ApiResponse>(this.domain+'articles-categories-list' ,{})
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
  

  getLogin(data:any): Observable<any> {
    const url = `${this.domain}user/login`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http
      .post(url, data, { headers })
      .pipe(catchError(this.handleError));
  }
} 




