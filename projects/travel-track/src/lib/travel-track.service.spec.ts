import { TestBed } from '@angular/core/testing';

import { TravelTrackService } from './travel-track.service';

describe('TravelTrackService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TravelTrackService = TestBed.get(TravelTrackService);
    expect(service).toBeTruthy();
  });
});
