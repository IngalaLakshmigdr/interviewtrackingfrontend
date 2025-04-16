import { environment } from "../../environments/environment";

import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable()
export class TechPanelService {
  private baseUrl = 'http://localhost:8083/tech';

  constructor(private http: HttpClient) {}

  getAllTech(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/all`);
  }
}


