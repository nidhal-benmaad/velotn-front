import { TestBed } from '@angular/core/testing';

import { MatrialService } from './matrial.service';

describe('MatrialService', () => {
  let service: MatrialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatrialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
