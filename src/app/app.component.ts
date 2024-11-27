import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';  // Import RouterLink

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterOutlet, RouterLink]  // Add RouterLink to imports here
})
export class AppComponent {
  title = 'routing-example';
}
