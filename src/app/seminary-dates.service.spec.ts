import { TestBed } from '@angular/core/testing';

import { SeminaryDatesService } from './seminary-dates.service';

describe('SeminaryDatesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SeminaryDatesService = TestBed.get(SeminaryDatesService);
    expect(service).toBeTruthy();
  });
});
