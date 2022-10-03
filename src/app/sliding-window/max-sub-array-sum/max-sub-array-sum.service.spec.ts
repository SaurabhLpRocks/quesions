import { TestBed } from '@angular/core/testing';

import { MaxSubArraySumService } from './max-sub-array-sum.service';

describe('MaxSubArraySumService', () => {
  let service: MaxSubArraySumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaxSubArraySumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
