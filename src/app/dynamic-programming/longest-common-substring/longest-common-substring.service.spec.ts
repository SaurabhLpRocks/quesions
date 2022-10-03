import { TestBed } from '@angular/core/testing';

import { LongestCommonSubstringService } from './longest-common-substring.service';

describe('LongestCommonSubstringService', () => {
  let service: LongestCommonSubstringService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LongestCommonSubstringService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
