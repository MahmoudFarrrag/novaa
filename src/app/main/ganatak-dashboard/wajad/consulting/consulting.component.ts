import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ApisService } from '@core/services/apis.service';
import { ColumnMode, DatatableComponent, SelectionType } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-consulting',
  templateUrl: './consulting.component.html',
  styleUrls: ['./consulting.component.scss'],
    encapsulation: ViewEncapsulation.None,
  
})
export class ConsultingComponent implements OnInit {
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

  public levels: any[] = [];


  ngOnInit(): void {
    const consulting_id = 1; 

    this.getLevels(consulting_id);
 
  }
  getLevels(consulting_id:any) {
    this.apisService.consultant(consulting_id ).subscribe({
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
