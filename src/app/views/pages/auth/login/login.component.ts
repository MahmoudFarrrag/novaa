import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApisService } from 'src/app/services/apis.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  returnUrl: any;
  // email: string = '';
  email: string = 'admin@wajad.io';
  password: string = '123456!0';
  errorMessage: string = '';

  constructor(private router: Router, private route: ActivatedRoute,
    private apisService: ApisService,private http: HttpClient) { }

  ngOnInit(): void {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

  }

  // onLoggedin(e: Event) {
  //   e.preventDefault();
  //   localStorage.setItem('isLoggedin', 'true');
  //   if (localStorage.getItem('isLoggedin')) {
  //     this.router.navigate([this.returnUrl]);
  //   }
  // }

  onLoggedin(e: Event) {
    e.preventDefault();
    this.apisService.Login(this.email, this.password).subscribe(
      response => {
        localStorage.setItem('isLoggedin', 'true');
        this.router.navigate([this.returnUrl]);
      },
      error => {
        console.error('Login failed:', error);
        this.errorMessage = 'Login failed. Please check your email and password and try again.';
      }
    );
  }

// thissss WORKS with web server for ligin in 





}
