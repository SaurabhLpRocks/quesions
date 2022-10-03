import { TestBed } from '@angular/core/testing';

import { FindPairOf2ArrayItemsThatSumsToGivenNumberService } from './find-pair-of-2-array-items-that-sums-to-given-number.service';

describe('FindPairOf2ArrayItemsThatSumsToGivenNumberService', () => {
  let service: FindPairOf2ArrayItemsThatSumsToGivenNumberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindPairOf2ArrayItemsThatSumsToGivenNumberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
