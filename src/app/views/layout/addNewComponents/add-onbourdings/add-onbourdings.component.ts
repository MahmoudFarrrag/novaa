import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-onbourdings',
  templateUrl: './add-onbourdings.component.html',
  styleUrls: ['./add-onbourdings.component.scss']
})
export class AddOnbourdingsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  onFileSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files?.length) {
      const file = inputElement.files[0];
      // You can now handle the selected file (e.g., upload to server, display preview, etc.)
      console.log('Selected file:', file);
    }
  }
}
