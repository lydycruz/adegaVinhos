import { TestBed } from '@angular/core/testing';

import { VinhosService } from './vinhos.service';

describe('VinhosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VinhosService = TestBed.get(VinhosService);
    expect(service).toBeTruthy();
  });
});
