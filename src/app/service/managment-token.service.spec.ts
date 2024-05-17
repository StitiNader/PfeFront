import { TestBed } from '@angular/core/testing';

import { ManagmentTokenService } from './managment-token.service';

describe('ManagmentTokenService', () => {
  let service: ManagmentTokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagmentTokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
