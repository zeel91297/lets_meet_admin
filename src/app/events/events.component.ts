import { Component, OnInit } from '@angular/core';

import { Events_Class } from '../shared/event_class';
import { EventsDbService } from '../providers/eventsDb/events-db.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  arrEvents: Events_Class[] = [];
  constructor(public _dataEvent: EventsDbService) { }

  ngOnInit() {
    this._dataEvent.getAllEvents().subscribe(
      (data: Events_Class[]) => {
        this.arrEvents = data;
      },
      function (err) {
        alert(err);
      },
      function () {

      }
    );
  }

}
