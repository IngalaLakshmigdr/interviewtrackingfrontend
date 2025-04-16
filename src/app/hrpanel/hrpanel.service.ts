// FILE: src/app/hr-panel/hrpanel.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HrPanelService {
  private baseUrl = 'http://localhost:8082/hr';

  constructor(private http: HttpClient) {}

  getAllHr(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/all`);
  }
}


