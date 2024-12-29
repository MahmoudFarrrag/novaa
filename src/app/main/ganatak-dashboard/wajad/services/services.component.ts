import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ApisService } from '@core/services/apis.service';
import { ColumnMode, DatatableComponent, SelectionType } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
    encapsulation: ViewEncapsulation.None,
  
})
export class ServicesComponent implements OnInit {
  public services : any[] = [];

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
    this.serviceRequeset()
    this.subServiceRequest()
  }

serviceRequeset(){ 
this.apisService.requestServiceCategories().subscribe({ 
  next:(response :any )=> { 
    this.services =response.data || []
    console.log(this.services)
  } , 
  error(err) {
      console.log("Fetching Error" , err)
  },
})
}

subServiceRequest(){ 
  this.apisService.requestServiceSubCategories().subscribe({ 
    next:(response:any)=> {
      this.services=response.data || [] 
      console.log(this.services)
        
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
    this.services = this.tempData.filter((d) =>
      d.code.toLowerCase().includes(val)
    );
    this.table.offset = 0;
  }
}
