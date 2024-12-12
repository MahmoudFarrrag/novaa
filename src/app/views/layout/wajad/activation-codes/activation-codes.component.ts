import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApisService } from 'src/app/services/apis.service';

@Component({
  selector: 'app-activation-codes',
  templateUrl: './activation-codes.component.html',
  styleUrls: ['./activation-codes.component.scss']
})
export class ActivationCodesComponent implements OnInit {

  constructor(private apisService: ApisService,
    private http: HttpClient) { }

    public arrActivationCodes:any[] = [
      {
        id: "1",
        activationCode: "ABC123",
        date: "2024-07-12",
        expireAt: "2024-08-12",
        deviceModel: "iPhone 12"
      },
      {
        id: "2",
        activationCode: "XYZ789",
        date: "2024-07-13",
        expireAt: "2024-08-13",
        deviceModel: "Samsung Galaxy S20"
      },
      {
        id: "3",
        activationCode: "PQR456",
        date: "2024-07-14",
        expireAt: "2024-08-14",
        deviceModel: "Google Pixel 5"
      },
      {
        id: "4",
        activationCode: "DEF321",
        date: "2024-07-15",
        expireAt: "2024-08-15",
        deviceModel: "OnePlus 9"
      },
      {
        id: "5",
        activationCode: "MNO987",
        date: "2024-07-16",
        expireAt: "2024-08-16",
        deviceModel: "Huawei P40 Pro"
      }
    ];


  ngOnInit(): void {
  }


  getOurActivationCodes() {
    this.apisService.ActivationCodes().subscribe({
      next: data => {
        let response: any = data;
        this.arrActivationCodes = response.data;
        console.log(this.arrActivationCodes);
      },
      error: error => {
        console.log(error);
      }
    });
  }

}
