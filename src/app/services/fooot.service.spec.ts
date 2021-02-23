import { TestBed } from '@angular/core/testing';

import { FoootService } from './fooot.service';

describe('FoootService', () => {
  let service: FoootService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoootService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
