import { TestBed } from '@angular/core/testing';

import { TouristPackagesServiceService } from './tourist-packages-service.service';

describe('TouristPackagesServiceService', () => {
  let service: TouristPackagesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TouristPackagesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
