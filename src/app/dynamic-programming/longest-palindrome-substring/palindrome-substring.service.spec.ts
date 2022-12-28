import { TestBed } from '@angular/core/testing';

import { LongestPalindromeSubstringService } from './longest-palindrome-substring.service';

describe('LongestPalindromeSubstringService', () => {
  let service: LongestPalindromeSubstringService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LongestPalindromeSubstringService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
