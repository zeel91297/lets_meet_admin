import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Events_Class } from '../shared/event_class';
import { EventsDbService } from '../providers/eventsDb/events-db.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  arrEvents: Events_Class[] = [];
  constructor(public _dataEvent: EventsDbService,
    public router: Router) { }

  ngOnInit() {
    this._dataEvent.getAllEvents().subscribe(
      (data: Events_Class[]) => {
        this.arrEvents = data;
        console.log(data);
      },
      function (err) {
        alert(err);
      },
      function () {

      }
    );
  }

  deleteEvent(item) {
    this._dataEvent.deleteEvent(item).subscribe(
      (data: any) => {
        this.ngOnInit();
      },
      function (err) {
        alert(err);
      },
      function () {

      }
    );
  }

  updateEvent(item) {
    this.router.navigate(['/updateEvent', item.event_id]);
  }

}
