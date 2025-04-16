import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminDashboard } from './admin-dashboard/admin-dashboard.module'; // Assuming file is named admin.component.ts
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('AdminDashboardComponent', () => {
  let component: AdminDashboard;
  let fixture: ComponentFixture<AdminDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminDashboard],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]  // Optional: if you have unknown HTML elements (like custom child components)
    }).compileComponents();

    fixture = TestBed.createComponent(AdminDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the AdminDashboardComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize admin array as empty', () => {
    expect(component.admins).toEqual([]);
  });
});
