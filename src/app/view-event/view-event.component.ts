import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// tslint:disable-next-line:import-blacklist
import { Subscription } from 'rxjs/Rx';
import { EventsDbService } from '../providers/eventsDb/events-db.service';
import { CommunityDbService } from '../providers/communitiesDb/community-db.service';
import { FormControl, Validators } from '@angular/forms';
import { routing } from '../app.routing';

import { Events_Class, Event_update_class } from '../shared/event_class';

import { Community_Class } from '../shared/community_class';

@Component({
  selector: 'app-view-event',
  templateUrl: './view-event.component.html',
  styleUrls: ['./view-event.component.css']
})
export class ViewEventComponent implements OnInit {

  public _subscription: Subscription;

  event_id: any;
  event_name: string = '';
  event_des: string = '';
  event_s_time: any;
  event_e_time: any;
  event_date: any;
  e_date: string;
  event_loc: string = '';
  created_by: string = 'zeel91297@gmail.com';
  event_pic: any = '';
  community_id: any;
  event_verify: string = '';

  arrEvent: Events_Class[] = [];
  arrCommu: Community_Class[] = [];

  fileFlag: Boolean = false;

  constructor(public router: Router,
    public activatedRoute: ActivatedRoute,
    public _dataEvent: EventsDbService,
    public _dataCommu: CommunityDbService) {

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
        this.arrEvent = data;
        this.event_name = this.arrEvent[0].event_name;
        this.event_des = this.arrEvent[0].event_des;
        this.event_pic = this.arrEvent[0].event_pic;
        this.event_s_time = this.arrEvent[0].event_s_time;
        this.event_e_time = this.arrEvent[0].event_e_time;
        this.event_date = this.arrEvent[0].event_date;
        this.event_loc = this.arrEvent[0].event_loc;
        this.community_id = this.arrEvent[0].fk_comm_id;
        this.event_verify = this.arrEvent[0].event_verify;
      },
      function (err) {
        alert(err);
      },
      function () {

      }
    );

    this._dataCommu.getAllCommunities().subscribe(
      (data: Community_Class[]) => {
        this.arrCommu = data;
      },
      function (e) {
        alert(e);
      },
      function () {

      }
    );
  }

  done() {
    this.router.navigate(['/unApprovedEvents']);
  }

  verifyEvent() {
    // tslint:disable-next-line:max-line-length
    this._dataEvent.verify_Event(new Events_Class(this.event_id, this.event_name, this.event_des, this.event_pic, this.event_s_time, this.event_e_time, this.event_date, this.event_loc, this.created_by, this.community_id, this.event_verify)).subscribe(
      (data: any) => {
        alert('Event verified');
        console.log(data);
        this.router.navigate(['/unApprovedEvents']);
      },
      function (err) {
        alert(err);
      },
      function () {

      }
    );
  }

}
