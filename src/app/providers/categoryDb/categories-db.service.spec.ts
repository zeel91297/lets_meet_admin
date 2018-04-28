import { TestBed, inject } from '@angular/core/testing';

import { CategoriesDbService } from './categories-db.service';

describe('CategoriesDbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoriesDbService]
    });
  });

  it('should be created', inject([CategoriesDbService], (service: CategoriesDbService) => {
    expect(service).toBeTruthy();
  }));
});
