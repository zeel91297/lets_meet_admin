import { TestBed, inject } from '@angular/core/testing';

import { PostsDbService } from './posts-db.service';

describe('PostsDbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostsDbService]
    });
  });

  it('should be created', inject([PostsDbService], (service: PostsDbService) => {
    expect(service).toBeTruthy();
  }));
});
