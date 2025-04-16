import { TestBed } from '@angular/core/testing';

import { HrPanelService } from './hrpanel.service';

describe('HrpanelService', () => {
  let service: HrPanelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HrPanelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
