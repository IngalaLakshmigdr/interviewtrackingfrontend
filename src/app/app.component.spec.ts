import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
      providers: [{ provide: Router, useValue: routerSpy }]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should redirect to admin-login if no role is set', () => {
    localStorage.removeItem('role');
    component.ngOnInit();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/admin-login']);
  });

  it('should redirect to /admin if role is admin', () => {
    localStorage.setItem('role', 'admin');
    component.ngOnInit();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/admin']);
  });

  it('should redirect to /techpanel if role is techpanel', () => {
    localStorage.setItem('role', 'techpanel');
    component.ngOnInit();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/techpanel']);
  });

  it('should redirect to /hrpanel if role is hrpanel', () => {
    localStorage.setItem('role', 'hrpanel');
    component.ngOnInit();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/hrpanel']);
  });

  it('should redirect to /dashboard if role is unknown', () => {
    localStorage.setItem('role', 'unknown');
    component.ngOnInit();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/dashboard']);
  });
});
