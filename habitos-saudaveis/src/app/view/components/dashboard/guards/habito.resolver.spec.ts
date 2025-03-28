import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { habitoResolver } from './habito.resolver';

describe('habitoResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => habitoResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
