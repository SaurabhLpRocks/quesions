import { TestBed } from '@angular/core/testing';

import { BalancedArrayService } from './balanced-array.service';

describe('BalancedArrayService', () => {
  let service: BalancedArrayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BalancedArrayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
