import { TestBed } from '@angular/core/testing';

import { AppQrService } from '../moduloappqr.service';

describe('AppQrService', () => {
  let service: AppQrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppQrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
