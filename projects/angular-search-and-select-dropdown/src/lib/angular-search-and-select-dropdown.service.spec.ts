import { TestBed } from '@angular/core/testing';

import { AngularSearchAndSelectDropdownService } from './angular-search-and-select-dropdown.service';

describe('AngularSearchAndSelectDropdownService', () => {
  let service: AngularSearchAndSelectDropdownService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularSearchAndSelectDropdownService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
