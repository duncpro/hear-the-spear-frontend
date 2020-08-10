import { TestBed } from '@angular/core/testing';

import { TopChartsService } from './top-charts.service';

describe('TopChartsService', () => {
  let service: TopChartsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopChartsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
