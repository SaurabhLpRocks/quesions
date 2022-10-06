import { TestBed } from '@angular/core/testing';

import { BalancedBracketsService } from './balanced-brackets.service';

describe('BalancedBracketsService', () => {
  let service: BalancedBracketsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BalancedBracketsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
