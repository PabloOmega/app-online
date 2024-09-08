import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { outputGuard } from './output.guard';

describe('outputGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => outputGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
