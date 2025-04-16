import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminRegisterComponent } from './home/login/admin-register';
import { AdminComponent } from './admin/admin-dashboard/admin.component';
import { TechpanelComponent } from './techpanel/techpanel.component';
import { HrpanelComponent } from './hrpanel/hrpanel.component';
import { DashboardComponent } from './home/dashboard.component';

export const routes: Routes = [
  {path:'home', component: DashboardComponent},
  { path: 'admin', component: AdminComponent },
  {
    path: 'admin-login',
    loadComponent: () => import('./home/login/admin-login').then(m => m.LoginComponent)
  },
  {path:'admin-register', component: AdminRegisterComponent},
  { path: 'admin-dashboard', component: AppComponent },
  { path: 'techpanel', component: TechpanelComponent },
  { path: 'hrpanel', component: HrpanelComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];