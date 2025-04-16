import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { TechPanelService } from '../techpanel.service';

@Component({
  selector: 'app-tech-dashboard',
  standalone: true,
  imports: [CommonModule], 
  template: `
    <h2>Tech Dashboard</h2>
    <pre>{{ data | json }}</pre>
  `
})
export class TechDashboardComponent implements OnInit {
  data: any;

  constructor(private techService: TechPanelService) {}

  ngOnInit(): void {
    this.techService.getAllTech().subscribe((res: any) => this.data = res);
  }
}
