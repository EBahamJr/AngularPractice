import { TestBed } from '@angular/core/testing';

import { PokeAPIserveService } from './poke-apiserve.service';

describe('PokeAPIserveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PokeAPIserveService = TestBed.get(PokeAPIserveService);
    expect(service).toBeTruthy();
  });
});
