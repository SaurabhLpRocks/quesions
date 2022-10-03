import { TestBed } from '@angular/core/testing';

import { SameFrequencyService } from './same-frequency.service';

describe('SameFrequencyService', () => {
  let service: SameFrequencyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SameFrequencyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
