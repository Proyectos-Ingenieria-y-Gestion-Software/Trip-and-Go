import { TestBed } from '@angular/core/testing';

import { MuseumsServiceService } from './museums-service.service';

describe('MuseumsServiceService', () => {
  let service: MuseumsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MuseumsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
