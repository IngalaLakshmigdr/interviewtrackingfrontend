import { TestBed } from '@angular/core/testing';

import { TechPanelService } from './techpanel.service';

describe('TechpanelService', () => {
  let service: TechPanelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TechPanelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
