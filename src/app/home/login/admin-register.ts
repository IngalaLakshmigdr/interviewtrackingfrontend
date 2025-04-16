import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-admin-register',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  template: `
    <h2>Admin Registration</h2>
    <form (ngSubmit)="onRegister()" #registerForm="ngForm">
      <input type="text" [(ngModel)]="admin.username" name="username" placeholder="Username" required />
      <input type="password" [(ngModel)]="admin.password" name="password" placeholder="Password" required />
      <input type="email" [(ngModel)]="admin.email" name="email" placeholder="Email" required />
      <button type="submit" [disabled]="registerForm.invalid">Register</button>
    </form>

    <div *ngIf="success" style="color: green;">Registration successful! Please login.</div>
    <div *ngIf="error" style="color: red;">{{ errorMessage }}</div>
  `
})
export class AdminRegisterComponent {
  admin = {
    username: '',
    password: '',
    email: ''
  };

  success = false;
  error = false;
  errorMessage = '';

  constructor(private http: HttpClient, private router: Router) {}

  onRegister() {
    this.http.post('http://localhost:8084/admin-auth/register', this.admin).subscribe({
      next: () => {
        this.success = true;
        this.error = false;
        setTimeout(() => this.router.navigate(['/admin-login']), 1500);
      },
      error: (err) => {
        this.error = true;
        this.success = false;
        this.errorMessage = err.error?.message || 'Registration failed. Please try again.';
      }
    });
  }
}
