import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userRole: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    const role = localStorage.getItem('role');
    if (role) {
      this.userRole = role;
    }
  }

  goToPanel(): void {
    if (this.userRole === 'admin') {
      this.router.navigate(['/admin']);
    } else if (this.userRole === 'hr') {
      this.router.navigate(['/hr']);
    } else if (this.userRole === 'tech') {
      this.router.navigate(['/tech']);
    }
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
