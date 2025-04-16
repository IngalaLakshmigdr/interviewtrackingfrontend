import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule],
  template: `
    <main>
      <h1>Admin Dashboard</h1>
      <p>Welcome, Admin! This is your dashboard.</p>
      <button (click)="logout()">Logout</button>
    </main>
  `,
  styles: [`main { margin: 20px; } button { padding: 5px 10px; }`]
})
export class AdminComponent {
  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('role');
    localStorage.removeItem('token');
    this.router.navigate(['/admin-login']); // Adjust to your login route in home
  }
}
