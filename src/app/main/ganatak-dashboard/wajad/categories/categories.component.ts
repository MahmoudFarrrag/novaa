import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ApisService } from '@core/services/apis.service';
import { ColumnMode, DatatableComponent, SelectionType } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class CategoriesComponent implements OnInit {
  public category: any[] = [];

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
    this.requestCategory()
    this.requestShopProducts()
    this.requestProducts()
    this.requestArticleCategories()
    //parameter needed
    //testing param
    this.requestShopProductsCategories(1)
  }

  requestCategory(){ 
    this.apisService.requestMarketCategories().subscribe({ 
      next:(response)=> {
        this.category=response.data || []
        console.log(this.category)
          
      },
      error(err) {
          console.log("fetching error", err )
      },
    })
  }


  requestShopProducts(){
    this.apisService.requestShopProducts().subscribe({ 
      next:(response)=> {
        this.category=response.data || []
        console.log(this.category)
          
      },
      error(err) {
          console.log("fetching error", err )
      },
    })
  }

  requestProducts(){ 
    this.apisService.requestProducts().subscribe({ 
      next:(response)=> {
        this.category=response.data || []
        console.log(this.category)
          
      },
      error(err) {
          console.log("fetching error", err )
      },
    })
  }


  requestArticleCategories(){ 
    this.apisService.requestArticleCategories().subscribe({ 
      next:(response)=> {
        this.category=response.data || []
        console.log(this.category)
          
      },
      error(err) {
          console.log("fetching error", err )
      },
    })
  }

  requestShopProductsCategories(shop_id:number){ 
    this.apisService.requestShopProductsCategories(shop_id).subscribe({ 
      next:(response)=> {
        this.category=response.data || []
        console.log(this.category)
          
      },
      error(err) {
          console.log("fetching error", err )
      },
    })
  }

  addCoupon() {
    this.router.navigate(["main/coupons/add-coupon"]);
  }

  

 

  filterUpdate(event) {
    const val = event.target.value.toLowerCase();
    this.category = this.tempData.filter((d) =>
      d.code.toLowerCase().includes(val)
    );
    this.table.offset = 0;
  }
}
