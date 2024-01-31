import { TestBed } from '@angular/core/testing';

import { PromotingService } from './promothins.service';

describe('PromothinsService', () => {
  let service: PromotingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PromotingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
