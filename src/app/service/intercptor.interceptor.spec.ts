import { TestBed } from '@angular/core/testing';

import { IntercptorInterceptor } from './intercptor.interceptor';

describe('IntercptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      IntercptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: IntercptorInterceptor = TestBed.inject(IntercptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
