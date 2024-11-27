import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import necessary modules
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { CommonModule } from '@angular/common'; // Import CommonModule for directives like *ngIf

@Component({
  selector: 'app-user-profile',
  standalone: true, // Standalone component
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  imports: [ReactiveFormsModule, CommonModule], // Add ReactiveFormsModule and CommonModule here
})
export class UserProfileComponent {
  userProfileForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Initialize the form group
    this.userProfileForm = this.fb.group({
      firstName: ['', [Validators.required]],
      middleName: [''], // Optional field
      lastName: ['', [Validators.required]],
      houseNumber: ['', [Validators.required]],
      street: ['', [Validators.required]],
      barangay: ['', [Validators.required]],
      city: ['', [Validators.required]],
      province: ['', [Validators.required]],
      profileImage: [''], // For the profile image
      email: ['', [Validators.required, Validators.email]],
      mobileNumber: [
        '',
        [Validators.required, Validators.pattern('^[0-9]{10}$')],
      ], // Ensure valid 10-digit mobile number
    });
  }

  // Handle form submission
  onSubmit() {
    if (this.userProfileForm.valid) {
      console.log('Form Data:', this.userProfileForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

  // Handle file upload for profile image
  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.userProfileForm.patchValue({
        profileImage: file,
      });
    }
  }
}
