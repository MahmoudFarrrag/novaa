import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ApisService } from '@core/services/apis.service';
import { ColumnMode, DatatableComponent, SelectionType } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
    encapsulation: ViewEncapsulation.None,
  
})
export class NotificationsComponent implements OnInit {
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
  public SelectionType = SelectionType;

  ngOnInit(): void {
    this.notificationsCount()

    
    // parameters needed
    // this.notifications()
    // this.seenNotifications()


  }

  notificationsCount(){ 
    this.apisService.requestNotificationsCount().subscribe({
      next:(response)=> {
        this.arrCoupons=response.data || []
      },
      error:(err)=> {
        console.log("Error in fetching",err)
        
          
      },
    })
  }
  notifications(page:number){
    this.apisService.requestNotifications(page).subscribe({ 
      next:(response)=> {
        this.arrCoupons= response.data || []
      },
      error:(err)=> {
        console.log("Error in Fetching data", err)
      },
    }) 

  }

  seenNotifications(notification_id:number){ 
    this.apisService.requestNotificationSee(notification_id).subscribe({ 
      next:(reponse)=> {
        this.arrCoupons=reponse.data || []; 
        console.log(this.arrCoupons)
          
      },
      error:(err)=> {
      console.log('Fetching Error', err)          
      },
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
