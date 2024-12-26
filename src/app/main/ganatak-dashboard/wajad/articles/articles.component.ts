import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ApisService } from '@core/services/apis.service';
import { ColumnMode, DatatableComponent, SelectionType } from '@swimlane/ngx-datatable';

interface ApiResponse {
  data: any;  // Define the type of 'data' based on your API response structure, e.g., `any[]` or a specific shape.
}

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
    encapsulation: ViewEncapsulation.None,
  
})
export class ArticlesComponent implements OnInit {
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
  public levels: any[] = [];

  @ViewChild(DatatableComponent) table: DatatableComponent;

  public ColumnMode = ColumnMode;
  public SelectionType = SelectionType;

  ngOnInit(): void {
    this.getLevels();
  //   this.apisService.article().subscribe({ 
  //     next:(response:any)=> { 
  //       this.levels = response.data || [] ;
  //       console.log('response is' , this.levels)
  //     }, 
  //     error:(err)=> { 
  //       console.log('error in fetching', err)
  //     }
  //   })
  }

 


  getLevels() {
    this.apisService.article().subscribe({
      next: (response) => {
        this.levels = response.data;
        console.log(this.levels);
      },
    });
  }
  // getLevels() {
  //   this.apisService.article().subscribe({
  //     next: (response: ApiResponse) => {
  //       this.levels = response.data;
  //       console.log(this.levels);
  //     },
  //     error: (err) => {
  //       console.error('Error fetching levels:', err);
  //     }
  //   });
  // }

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
