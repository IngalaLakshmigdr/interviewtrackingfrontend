// src/app/admin/admin.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from '../admin.model';

@Injectable()
export class AdminService {
  private baseUrl = 'http://localhost:8084/admin-auth/login';

  constructor(private http: HttpClient) {}

  getAllAdmin(): Observable<Admin[]> {
    return this.http.get<Admin[]>(`${this.baseUrl}/all`);
  }
}

