import { Component, OnInit } from '@angular/core';
import { HrPanelService } from '../hrpanel.service';

@Component({
  selector: 'app-hrdashboard',
  template: `<h2>HR Dashboard</h2>
             <pre>{{ data | json }}</pre>`
})
export class HrDashboardComponent implements OnInit {
  data: any;

  constructor(private hrService: HrPanelService) {}

  ngOnInit(): void {
    this.hrService.getAllHr().subscribe((res: any) => this.data = res);
  }
}
