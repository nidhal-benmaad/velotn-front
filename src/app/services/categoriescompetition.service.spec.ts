import { TestBed } from '@angular/core/testing';

import { CategoriescompetitionService } from './categoriescompetition.service';

describe('CategoriescompetitionService', () => {
  let service: CategoriescompetitionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriescompetitionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
