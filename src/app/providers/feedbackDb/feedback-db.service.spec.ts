import { TestBed, inject } from '@angular/core/testing';

import { FeedbackDbService } from './feedback-db.service';

describe('FeedbackDbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeedbackDbService]
    });
  });

  it('should be created', inject([FeedbackDbService], (service: FeedbackDbService) => {
    expect(service).toBeTruthy();
  }));
});
