import { TestBed } from '@angular/core/testing';

import { NasaDataService } from './nasa-data.service';

describe('NasaDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NasaDataService = TestBed.get(NasaDataService);
    expect(service).toBeTruthy();
  });
});
