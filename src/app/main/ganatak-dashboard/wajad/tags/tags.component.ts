import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ApisService } from '@core/services/apis.service';
import { ColumnMode, DatatableComponent, SelectionType } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss'],
    encapsulation: ViewEncapsulation.None,
  
})
export class TagsComponent implements OnInit {
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
    // Tag id needed 
    const tag_id = 1; 

    this.tagsArticles(tag_id)
    this.tagsProducts(tag_id)
  }

 tagsArticles(tag_id:any){ 
  this.apisService.requestTagArticles(tag_id).subscribe({
    next:(reponse:any)=> {
      this.arrCoupons=reponse.data || {} ;
      console.log(this.arrCoupons)        
    },
    error:(err)=> {
      console.log("Error in fetching data",err)
        
    },
  })
 }

 tagsProducts(tag_id:any){ 
  this.apisService.requestTagProducts(tag_id).subscribe({
    next:(reponse:any)=> {
      this.arrCoupons=reponse.data || {} ;
      console.log(this.arrCoupons)        
    },
    error:(err)=> {
      console.log("Error in fetching data",err)
        
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
