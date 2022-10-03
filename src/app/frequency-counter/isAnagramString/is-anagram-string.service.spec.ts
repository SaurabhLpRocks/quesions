import { TestBed } from '@angular/core/testing';

import { IsAnagramStringService } from './is-anagram-string.service';

describe('IsAnagramStringService', () => {
  let service: IsAnagramStringService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsAnagramStringService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
