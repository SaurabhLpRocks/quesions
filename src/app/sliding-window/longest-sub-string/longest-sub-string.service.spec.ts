import { TestBed } from '@angular/core/testing';

import { LongestSubStringService } from './longest-sub-string.service';

describe('LongestSubStringService', () => {
  let service: LongestSubStringService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LongestSubStringService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
