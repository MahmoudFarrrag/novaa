import { HttpClient } from '@angular/common/http';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApisService } from '@core/services/apis.service';
import {
  ColumnMode,
  SelectionType,
  DatatableComponent,
} from "@swimlane/ngx-datatable";

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss'],
  encapsulation: ViewEncapsulation.None,
 
})


export class AdsComponent  implements OnInit {
  public arrCoupons: any[] = [];

  constructor( 
    private apisService: ApisService,
    // private loadingService: Loadingscr,
    private router: Router
  ) {} 

  public currentPage = 1; 
  public itemsPerPage = 10;
  public totalItems = 0;

  public tempData = [];

  @ViewChild(DatatableComponent) table: DatatableComponent;

  public ColumnMode = ColumnMode;
  public SelectionType = SelectionType;v

  ngOnInit(): void {
    this.apisService.requestAds().subscribe({ 
      next:(response:any)=> { 
        this.arrCoupons = response.data || [] ;
        console.log('response is' , this.arrCoupons)
      }, 
      error:(err)=> { 
        console.log('error in fetching', err)
      }
    })
  }

 

  addCoupon() {
    this.router.navigate(["main/coupons/add-coupon"]);
  }

  

 

  filterUpdate(event) {
    const val = event.target.value.toLowerCase();
    this.arrCoupons = this.tempData.filter((d) =>
      d.code.toLowerCase().includes(val)
    );
    this.table.offset = 0;
  }
}
