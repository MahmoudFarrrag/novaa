import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ApisService } from '@core/services/apis.service';
import { ColumnMode, DatatableComponent, SelectionType } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-cancelation-reason',
  templateUrl: './cancelation-reason.component.html',
  styleUrls: ['./cancelation-reason.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class CancelationReasonComponent implements OnInit {
  public reasons: any[] = [];
  public cancel_orders: any[] = [];


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
  public SelectionType = SelectionType;

  ngOnInit(): void {
    this.cancelReasons()
    
    //parameters needed
    //testing parameters
    this.cancelOrders(12 , 12)
  }

  cancelReasons() { 
    this.apisService.requestCancelReasons().subscribe({
      next:(response)=>{ 
        this.reasons=response.data || []
        console.log(this.reasons)
      }, 
      error(err) {
          console.log("Fetching Error", err)
      },
    })
  }

  cancelOrders(order_id:number ,  cancellation_reason_id:number ){
    this.apisService.requestCancelOrder(order_id , cancellation_reason_id).subscribe({ 
      next:(response)=>{ 
        this.cancel_orders= response.data ||  []
        console.log(this.cancel_orders)
      }, 
      error(err) {
          console.log("fetching error", err)
      },
    })
  }



  addCoupon() {
    this.router.navigate(["main/coupons/add-coupon"]);
  }

  

 

  filterUpdate(event) {
    const val = event.target.value.toLowerCase();
    this.reasons = this.tempData.filter((d) =>
      d.code.toLowerCase().includes(val)
    );
    this.table.offset = 0;
  }
}
