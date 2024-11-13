import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MsalService } from '@azure/msal-angular';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  constructor(private authService: MsalService) {
    this.authService.initialize();
  }

  login() {
    console.log('Login button clicked');  // Debugging line
    
    // Starts the login flow, using B2C's sign-in policy
    this.authService.loginRedirect(); // or loginPopup() if you prefer a popup
    this.authService.initialize();

  }

 
  
}
