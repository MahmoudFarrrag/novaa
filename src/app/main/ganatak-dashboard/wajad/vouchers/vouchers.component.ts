import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApisService } from '@core/services/apis.service';

@Component({
  selector: 'app-vouchers',
  templateUrl: './vouchers.component.html',
  styleUrls: ['./vouchers.component.scss']
})
export class VouchersComponent implements OnInit {
  public arrCoupons: any[] = [];

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


}
