import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TechDashboardComponent } from './techdashboard/techdashboard.compoenet';
import { TechPanelService } from './techpanel.service';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', component: TechDashboardComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    TechDashboardComponent  // ✅ imported instead of declared
  ],
  providers: [TechPanelService]
})
export class TechPanelModule {}
