import { TestBed } from '@angular/core/testing';

import { GetservicesService } from './getservice.service';

describe('GetservicesService', () => {
  let service: GetservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
