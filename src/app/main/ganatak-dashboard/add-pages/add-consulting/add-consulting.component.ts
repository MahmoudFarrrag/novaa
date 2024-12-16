import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApisService } from '@core/services/apis.service';

@Component({
  selector: 'app-add-consulting',
  templateUrl: './add-consulting.component.html',
  styleUrls: ['./add-consulting.component.scss']
})
export class AddConsultingComponent implements OnInit {

  formData: any = {  
    name_ar: '',
    name_en: '',
    code: '',
    mobile_code: '',
    image: '',
    mobile_length: '',
    mobile_start: ''
  }; // Declare formData property 
    public arrCountries:any[] = [];
    public country:any[] = [];
  
    constructor(private router: Router, private apisService: ApisService) { }
  
    ngOnInit(): void {
      // this.postCountires();
  
    }
    // postCountires() {
    //   this.apisService.postCountries().subscribe({
    //     next: (data: any) => {
    //       let response: any = data;
    //       if (Array.isArray(response.data)) { 
    //         this.arrCountries = response.data; 
    //       } else {
    //         this.arrCountries = [response.data]; 
    //       }
    //       console.log(this.arrCountries);
    //     },
    //     error: error => {
    //       console.log(error);
    //     }
    //   });
    // }
    
    
    // submitForm(): void {
    //   const formDataToSend = new FormData();
    //   formDataToSend.append('translations[0][locale]', 'ar');
    //   formDataToSend.append('translations[0][name]', this.formData.name_ar);
    //   formDataToSend.append('translations[1][locale]', 'en');
    //   formDataToSend.append('translations[1][name]', this.formData.name_en);
    //   formDataToSend.append('code', this.formData.code);
    //   formDataToSend.append('mobile_code', this.formData.mobile_code);
    //   formDataToSend.append('image', this.formData.image);
    //   formDataToSend.append('mobile_length', this.formData.mobile_length);
    //   formDataToSend.append('mobile_start', this.formData.mobile_start);
  
    //   this.apisService.addCountry(formDataToSend).subscribe({
    //     next: (response: any) => {
    //       console.log('Countries added successfully:', response);
    //       this.formData = {
    //         name_ar: '',
    //         name_en: '',
    //         code: '',
    //         mobile_code: '',
    //         image: '',
    //         mobile_length: '',
    //         mobile_start: ''
    //       };
    //       this.country.push(response.data);
    //       this.router.navigate(['/settings/countries']);
    //     },
    //     error: (error: any) => {
    //       console.log('Error adding countries:', error);
    //     }
    //   });
    // }
  
    cancel(): void {
      this.router.navigate(['/settings/countries']);
    }
  
    getTranslation(translations: any[], locale: string) {
      return translations.find(translation => translation.locale === locale) || {};
    }

    onFileSelected(event: Event) {
      const inputElement = event.target as HTMLInputElement;
      if (inputElement.files?.length) {
        const file = inputElement.files[0];
        // You can now handle the selected file (e.g., upload to server, display preview, etc.)
        console.log('Selected file:', file);
  
        this.formData.image = file;
  
      }
    }
}
