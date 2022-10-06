import { TestBed } from '@angular/core/testing';

import { AllUniqueCharsService } from './all-unique-chars.service';

describe('AllUniqueCharsService', () => {
  let service: AllUniqueCharsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllUniqueCharsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
