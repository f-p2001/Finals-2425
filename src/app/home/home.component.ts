import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true, // Mark the component as standalone if it's not part of a module
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'], // Corrected `styleUrl` to `styleUrls`
  imports: [] // This is optional unless you're importing other standalone components or Angular modules
})
export class HomeComponent {

}
