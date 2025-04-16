import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboard } from './admin-dashboard/admin-dashboard.module';

const routes: Routes = [
  { path: '', component: AdminDashboard }
];

@NgModule({
  imports: [RouterModule.forChild(routes), AdminDashboard], // Use import, not declarations
})
export class AdminModule { }

