import { TestBed, inject } from '@angular/core/testing';

import { EventsDbService } from './events-db.service';

describe('EventsDbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventsDbService]
    });
  });

  it('should be created', inject([EventsDbService], (service: EventsDbService) => {
    expect(service).toBeTruthy();
  }));
});
