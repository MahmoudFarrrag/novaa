import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApisService } from '@core/services/apis.service';
import { FooterComponent } from 'app/layout/components/footer/footer.component';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  headerTitle = { home: 'home', product: 'product', shop: 'Login | Register', title: 'login', bigTitle: 'Login & Register Page' };
  phoneNumber = new FormControl('', [Validators.required, Validators.minLength(10)]);
  isLoading = false;
  loginForm!: FormGroup;
  apiService: ApisService = inject(ApisService)

  route: Router = inject(Router)
  constructor(private fb: FormBuilder) {
   
  }
  ngOnInit(): void {
    this.setValue()
  }
  setValue() {
    this.loginForm = this.fb.group({
      mobile: ['', [Validators.required, Validators.minLength(10)]],
      country_id: ['']
    });
  }
  validatePhoneNumber() {
    const phoneValue = this.phoneNumber.value || '';

    if (phoneValue.length < 10) {
      this.phoneNumber.setErrors({ invalidLength: true });
    } else {
      this.phoneNumber.setErrors(null);
    }
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // this.isLoading = true;

      const formVAlues = this.loginForm.value;
      const formData = {
        mobile: formVAlues.mobile,
        country_id: '1',
        fire_base_token: '1'
      }

      this.apiService.getLogin(formData).subscribe({
        next: (response) => {
          localStorage.setItem('token', response.access_token);
          if (response.access_token) {
            if (typeof window !== 'undefined' && typeof window.location !== 'undefined') {
              localStorage.setItem('token', response.access_token);
              // location.replace('/');

            }
          }
          // this.isLoading = false;
        },
        error: (error) => {
          // this.isLoading = false;
        },
      });
    } 
  }
  debug() {
    console.log('Button clicked');
  }
}

