import { TestBed, inject } from '@angular/core/testing';

import { RsvpDbService } from './rsvp-db.service';

describe('RsvpDbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RsvpDbService]
    });
  });

  it('should be created', inject([RsvpDbService], (service: RsvpDbService) => {
    expect(service).toBeTruthy();
  }));
});
