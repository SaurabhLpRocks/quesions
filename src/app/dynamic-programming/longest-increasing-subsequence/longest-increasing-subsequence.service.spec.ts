import { TestBed } from '@angular/core/testing';

import { LongestIncreasingSubsequenceService } from './longest-increasing-subsequence.service';

describe('LongestIncreasingSubsequenceService', () => {
  let service: LongestIncreasingSubsequenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LongestIncreasingSubsequenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
