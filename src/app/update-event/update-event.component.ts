import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// tslint:disable-next-line:import-blacklist
import { Subscription } from 'rxjs/Rx';
import { EventsDbService } from '../providers/eventsDb/events-db.service';

import { Events_Class } from '../shared/event_class';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.css']
})
export class UpdateEventComponent implements OnInit {

  public _subscription: Subscription;

  event_id: any;
  event_name: any;
  event_des: string = '';
  event_s_time: any;
  event_e_time: any;
  event_date: any;
  event_loc: string = '';
  created_by: string = 'zeel91297@gmail.com';
  event_pic: any = '';
  community_id: any = 4;
  event_verify: any = '';

  arrEvent: Events_Class[] = [];

  selectedFile: File = null;

  constructor(public router: Router,
    public activatedRoute: ActivatedRoute,
    public _dataEvent: EventsDbService) {

  }

  ngOnInit() {

    this._subscription = this.activatedRoute.params.subscribe(
      (para: any) => {
        this.event_id = para['id'];
        console.log(this.event_id);
      }
    );

    this._dataEvent.getEventById(this.event_id).subscribe(
      (data: Events_Class[]) => {
        console.log(data);
        this.event_name = this.arrEvent[0].event_name;
        console.log(this.event_name);
        this.event_des = this.arrEvent[0].event_des;
        this.event_pic = this.arrEvent[0].event_pic;
        this.event_s_time = this.arrEvent[0].event_s_time;
        this.event_e_time = this.arrEvent[0].event_e_time;
        this.event_date = this.arrEvent[0].event_date;
        this.event_loc = this.arrEvent[0].event_loc;
        this.community_id = this.arrEvent[0].fk_comm_id;
      },
      function (err) {
        alert(err);
      },
      function () {

      }
    );
  }

}
