import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechpanelComponent } from './techpanel.component';

describe('TechpanelComponent', () => {
  let component: TechpanelComponent;
  let fixture: ComponentFixture<TechpanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechpanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
