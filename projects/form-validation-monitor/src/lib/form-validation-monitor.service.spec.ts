import { TestBed } from '@angular/core/testing';

import { FormValidationMonitorService } from './form-validation-monitor.service';

describe('FormValidationMonitorService', () => {
  let service: FormValidationMonitorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormValidationMonitorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
