import { TestBed } from '@angular/core/testing';

import { CountUniqueArrayItemsService } from './count-unique-array-items.service';

describe('CountUniqueArrayItemsService', () => {
  let service: CountUniqueArrayItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountUniqueArrayItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
