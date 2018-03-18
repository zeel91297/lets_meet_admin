import { TestBed, inject } from '@angular/core/testing';

import { CommunityDbService } from './community-db.service';

describe('CommunityDbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommunityDbService]
    });
  });

  it('should be created', inject([CommunityDbService], (service: CommunityDbService) => {
    expect(service).toBeTruthy();
  }));
});
