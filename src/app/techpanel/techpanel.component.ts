import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-techpanel',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <h1>Tech Panel Dashboard</h1>
      <p>Welcome, Tech Panel! This is your dashboard.</p>
      <button (click)="logout()">Logout</button>
    </div>
  `,
  styles: [`div { margin: 20px; } button { padding: 5px 10px; }`]
})
export class TechpanelComponent {
  constructor(private router: Router) {}

  logout() {
    // Clear any authentication data from localStorage or sessionStorage
    localStorage.removeItem('role');
    localStorage.removeItem('token'); // if you're using a token for authentication
    
    // Redirect to login page after logging out
    this.router.navigate(['/admin-login']); // or '/login', depending on your route
  }
}
