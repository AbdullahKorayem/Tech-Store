import { TestBed } from '@angular/core/testing';

import { ToAuthenticateUserService } from './to-authenticate-user.service';

describe('ToAuthenticateUserService', () => {
  let service: ToAuthenticateUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToAuthenticateUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
