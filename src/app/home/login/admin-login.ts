import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { CommonModule } from '@angular/common'; // Import CommonModule for *ngIf

@Component({
  standalone: true,
  selector: 'app-admin-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.compoent.css'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  isLoggedIn(): boolean {
    return sessionStorage.getItem('isLoggedIn') === 'true';
  }

  login(): void {
    if (this.loginForm.invalid) return;

    const { userName, password } = this.loginForm.value;

    this.http
      .post<any>('http://localhost:8084/admin-auth/login', { userName, password })
      .pipe(
        catchError(error => {
          console.error('Login failed', error);
          return of(null);
        })
      )
      .subscribe(response => {
        if (response && response.success) {
          sessionStorage.setItem('isLoggedIn', 'true');
          this.router.navigate(['/admin-dashboard']);
        } else {
          alert('Invalid credentials or login failed.');
        }
      });
  }

  logout(): void {
    sessionStorage.removeItem('isLoggedIn');
    this.router.navigate(['/admin-login']);
  }
}
