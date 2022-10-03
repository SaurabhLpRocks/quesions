import { TestBed } from '@angular/core/testing';

import { Is2ndArrayHasItemsSquare1stArrayItemsService } from './is-2nd-array-has-items-square-1st-array-items.service';

describe('Is2ndArrayHasItemsSquare1stArrayItemsService', () => {
  let service: Is2ndArrayHasItemsSquare1stArrayItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Is2ndArrayHasItemsSquare1stArrayItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
