import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ApisService } from '@core/services/apis.service';
import { ColumnMode, DatatableComponent, SelectionType } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
    encapsulation: ViewEncapsulation.None,
  
})
export class UsersComponent implements OnInit {
  public arrCoupons: any[] = [];
 
  constructor( 
    private apisService: ApisService,
    // private loadingService: Loadingscr,
    private router: Router
  ) {} 

  public currentPage = 1; 
  public itemsPerPage = 10;
  public totalItems = 0;
  public ColumnMode = ColumnMode;
  public SelectionType = SelectionType;

 
  public levels: any[] = [];
  public tempData = [];

  @ViewChild(DatatableComponent) table: DatatableComponent;

 

  // ngOnInit(): void {
  //   this.getLevels();

  // }
  ngOnInit(): void {
    this.apisService.users().subscribe({ 
      next:(response:any)=> { 
        this.arrCoupons = response.data || [] ;
        console.log('response is' , this.arrCoupons)
      }, 
      error:(err)=> { 
        console.log('error in fetching', err)
      }
    })
  }
 


  getLevels() {
    this.apisService.users().subscribe({
      next: (response) => {
        this.levels = response.data;
        console.log(this.levels);
      },
    });
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
