import { TestBed } from '@angular/core/testing';

import { NowPlayingService } from './now-playing.service';

describe('NowPlayingServiceService', () => {
  let service: NowPlayingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NowPlayingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
