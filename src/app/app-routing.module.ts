import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminRegisterComponent } from './home/login/admin-register';
import { DashboardComponent } from './home/dashboard.component';
import { AdminComponent } from './admin/admin-dashboard/admin.component';
import { TechpanelComponent } from './techpanel/techpanel.component';
import { HrpanelComponent } from './hrpanel/hrpanel.component';
import { LoginComponent } from './home/login/admin-login';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // ✅ Only one default route
  { path: 'home', component: DashboardComponent },
  { path: 'admin-login', component: LoginComponent },
  { path: 'techpanel', component: TechpanelComponent },
  { path: 'hrpanel', component: HrpanelComponent },
  { path: 'admin-register', component: AdminRegisterComponent }, // optional: if you're using this route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
