import { Component, OnInit } from '@angular/core';
import { AdminService } from './admin.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [AdminService]
})
export class AdminDashboard implements OnInit {
  admins: any[] = []; 

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.adminService.getAllAdmin().subscribe(
      (data: any[]) => {
        this.admins = data;
      },
      (error: any[]) => {
        console.error('Error fetching admin data:', error);
      }
    );
  }
}
