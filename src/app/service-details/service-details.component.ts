import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Import FormsModule

@Component({
  selector: 'app-service-details',
  standalone: true,  // Use standalone if you're using Angular 15 or later
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css'],
  imports: [FormsModule],  // Add FormsModule to the imports array
})
export class ServiceDetailsComponent {
  service: any = {
    name: '',
    description: '',
    category: '',
    cost: ''
  };

  // Constructor and any logic you need for the service
  constructor() {}

  onSubmit() {
    console.log('Form Submitted:', this.service);
  }
}
