import { TestBed } from '@angular/core/testing';

import { TproductoService } from '../tproducto.service';

describe('TproductoService', () => {
  let service: TproductoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TproductoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
