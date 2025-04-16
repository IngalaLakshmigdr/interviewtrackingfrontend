import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Router, RouterLink, RouterModule, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [CommonModule, RouterModule],
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoggedIn(): boolean {
    if (typeof window !== 'undefined') { // Check if window is available
      return !!localStorage.getItem('user');
    }
    return false;
  }

  isAuthenticated: boolean = false;
  authService: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    if (typeof window !== 'undefined') { // Check if window is available
      const role = localStorage.getItem('role');
      this.isAuthenticated = !!role;

      console.log('AppComponent: role =', role);
      if (role === 'home') {
        this.router.navigate(['/admin']);
      } else if (role === 'techpanel') {
        this.router.navigate(['/techpanel']);
      } else if (role === 'hrpanel') {
        this.router.navigate(['/hrpanel']);
      } else {
        this.router.navigate(['/admin-login']);
      }
    }
  }

  logout() {
    if (typeof window !== 'undefined') { // Check if window is available
      localStorage.removeItem('user');
      this.router.navigate(['/login']);
    }
  }
}
