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
  loginStep = 1;
  route: Router = inject(Router)
  token: any;

  otpArray: number[] = [];
  otpValues: string[] = [];
  otpComplete!: string;
  otpLength: number = 6;
  profileForm!: FormGroup;
  imagePreview: any;
  counteres: any;
  lang: any;
  SetImage: any;
  filterLingth:number=10;
  filterStartsWith:any='1';
  selectedCounter:any;
  constructor(private fb: FormBuilder) {
    this.otpArray = Array(this.otpLength).fill(0);
    this.otpValues = Array(this.otpLength).fill('');
    if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
      this.lang = localStorage.getItem('language')
      
    }
  }
  ngOnInit(): void {
    this.setValue()
    this.getCountery()
  }
  setValue() {
    this.loginForm = this.fb.group({
      mobile: ['', [Validators.required,]],
      country_id: ['']
    });
    this.profileForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      bio: new FormControl(''),
      image: new FormControl(null),
    });

  }
  onImageSelected(event: any): void {
    const file = event.target.files[0];
    this.SetImage=file
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string;        
      };
      reader.readAsDataURL(file);
    }
  }
  getCountery(){
  this.apiService.getCountry().subscribe({
    next:(res:any)=>{
      this.counteres = res.data;
      this.selectedCounter=this.counteres[0]
      this.loginForm.get('country_id')?.setValue(this.counteres[0].id)
    }
  }) 
  }
  selectedCountery(event: any): void {
    this.filterLingth=event?.number_count;
    this.filterStartsWith=event?.start_with;
    this.selectedCounter=event;
    this.setValue()
  }
  validatePhoneNumber() {
    const phoneValue = this.phoneNumber.value || '';

    if (phoneValue.length < 10) {
      this.phoneNumber.setErrors({ invalidLength: true });
    } else {
      this.phoneNumber.setErrors(null);
    }
  }
  submitProfileForm() {    
      const formData = new FormData();
      formData.append('name', this.profileForm.get('name')?.value);
      formData.append('email', this.profileForm.get('email')?.value);
      formData.append('bio', this.profileForm.get('bio')?.value);

      if (this.profileForm.get('image')?.value) {
        formData.append('image',  this.SetImage);
      }
      console.log('form',formData);

      this.apiService.completeProfile(this.token, formData).subscribe({
        next: (response) => {
          if (typeof window !== 'undefined' && typeof window.location !== 'undefined') {
            localStorage.setItem('ganatak_token', this.token);
            location.replace('/');
          }        },
        error: (error) => {
          console.error('Error:', error);
        }
      }
      );
    
  }
  onSubmit() {
    const otp = { 'activationCode': this.otpComplete }
    this.apiService.LoginOtp(otp, this.token).subscribe((data) => {
      let datas = data.data
      if (datas.is_data_complete) {
        if (typeof window !== 'undefined' && typeof window.location !== 'undefined') {
          localStorage.setItem('ganatak_token', this.token);
          location.replace('/');
        }
      } else {
        this.loginStep = 3
      }


    });
  }
  goToOtp() {
    console.log('goToOtp');

    if (this.loginForm.valid) {
      this.isLoading = true;
      console.log('this.loginForm.value', this.loginForm.value);

      const formVAlues = this.loginForm.value;
      const formData = {
        mobile: formVAlues.mobile,
        country_id: this.selectedCounter.id
      }

      this.apiService.getLogin(formData).subscribe({
        next: (response) => {
          localStorage.setItem('ganatak_token', response.access_token);
          if (response.access_token) {
            this.token = response.access_token
            this.loginStep = 2

          }
          this.isLoading = false;
        },
        error: (error) => {
          this.isLoading = false;
        },
      });
    }
  }

  onInput(event: Event, index: number): void {
    const input = event.target as HTMLInputElement;
    const value = input.value;

    if (/^\d$/.test(value)) {
      this.otpValues[index] = value;

      // الانتقال للخانة التالية
      if (index < this.otpLength - 1) {
        const nextInput = input.nextElementSibling as HTMLInputElement;
        if (nextInput) {
          nextInput.focus();
        }
      }

      // التحقق إذا كان الإدخال مكتملًا
      if (this.otpValues.join('').length === this.otpLength) {
        this.otpComplete = this.otpValues.join('');
      }
    } else {
      this.otpValues[index] = ''; // مسح الإدخال إذا لم يكن رقمًا
    }
  }

  onKeyDown(event: KeyboardEvent, index: number): void {
    const input = event.target as HTMLInputElement;

    // إذا ضغط Backspace
    if (event.key === 'Backspace' && !input.value) {
      const prevInput = input.previousElementSibling as HTMLInputElement;
      if (prevInput) {
        prevInput.focus();
      }
    }
  }
}

