import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ApisService } from '@core/services/apis.service';
import { ColumnMode, DatatableComponent, SelectionType } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class OffersComponent implements OnInit {
  public offers: any[] = [];
  public requestedOffers: any[] = [];
  public catOffers: any[] = [];

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
    this.homeOffers()

    //parameters needed
    //testing parameters 
    this.requestOffers(1,'2','4','4')
    this.categoryOffers(12)
  }

homeOffers() {
  this.apisService.requestHomeOffers().subscribe({
    next:(response:any)=>{ 
      this.offers=response.data || []
    },
    error(err) {
        console.log("Fetching Error" , err)
    },
  })
}

requestOffers(page:number , category_id:string , discount_sort:string, keyword:string){
  this.apisService.requestOffers(page , category_id, discount_sort,keyword).subscribe({
    next:(response:any)=> {
        this.requestedOffers=response.data || []
        console.log(this.requestedOffers)
    },
    error(err) {
        console.log(err)
    },
  })
}
categoryOffers(category_id:number){ 
  this.apisService.requestCategoryOffers(category_id).subscribe({ 
    next(response) 
    {
    this.catOffers=response.data || []
    console.log(this.catOffers)
    },
    error(err) {
        console.log("Fetching Error", err)
    },
  })
}
  

  addCoupon() {
    this.router.navigate(["main/coupons/add-coupon"]);
  }


  

 

  filterUpdate(event) {
    const val = event.target.value.toLowerCase();
    this.offers = this.tempData.filter((d) =>
      d.code.toLowerCase().includes(val)
    );
    this.table.offset = 0;
  }
}
