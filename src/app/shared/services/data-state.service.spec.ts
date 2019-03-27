import { TestBed } from '@angular/core/testing';

import { DataStateService } from './data-state.service';

describe('DataStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataStateService = TestBed.get(DataStateService);
    expect(service).toBeTruthy();
  });
});
