import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule to use *ngFor

@Component({
  selector: 'app-services',
  standalone: true,
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  imports: [CommonModule]  // Add CommonModule here
})
export class ServicesComponent {
  services = [
    { id: 1, name: 'Haircut', category: 'Hair', price: 15 },
    { id: 2, name: 'Facial', category: 'Skin', price: 30 },
    { id: 3, name: 'Manicure', category: 'Nail', price: 10 }
  ];

  // Define the viewService method
  viewService(serviceId: number) {
    console.log(`Viewing details for service with ID: ${serviceId}`);
    // Implement logic to navigate to the service details page, if needed
  }
}
