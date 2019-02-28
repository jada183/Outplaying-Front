import { TestBed } from '@angular/core/testing';

import { LolDataService } from './lol-data.service';

describe('LolDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LolDataService = TestBed.get(LolDataService);
    expect(service).toBeTruthy();
  });
});
