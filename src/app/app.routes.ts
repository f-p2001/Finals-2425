import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route for Home
  { path: 'about', component: AboutComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'user-profile', component: UserProfileComponent }
];
