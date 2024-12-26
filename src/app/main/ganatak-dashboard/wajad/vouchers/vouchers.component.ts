import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ApisService } from '@core/services/apis.service';
import { DatatableComponent, ColumnMode, SelectionType } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-vouchers',
  templateUrl: './vouchers.component.html',
  styleUrls: ['./vouchers.component.scss']
})
export class VouchersComponent implements OnInit {
  public currentPage = 1; 
  public itemsPerPage = 10;
  public totalItems = 0;

  public tempData = [];
  @ViewChild(DatatableComponent) table: DatatableComponent;
  
    public ColumnMode = ColumnMode;
    public SelectionType = SelectionType;

  constructor( 
    private apisService: ApisService,
    // private loadingService: Loadingscr,
    private router: Router
  ) {} 
  public levels: any[] = [];

  ngOnInit(): void {
    this.getLevels();

  }

 


  getLevels() {
    this.apisService.store().subscribe({
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
    this.levels = this.tempData.filter((d) =>
      d.code.toLowerCase().includes(val)
    );
    this.table.offset = 0;
  }

}
