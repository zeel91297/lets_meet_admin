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
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.css']
})
export class UpdateEventComponent implements OnInit {


  @ViewChild('fileInput') fileInput: ElementRef;

  public _subscription: Subscription;

  event_id: any;
  event_name: string = '';
  event_des: string = '';
  event_s_time: any;
  event_e_time: any;
  event_date: any;
  e_date: string;
  event_loc: string = '';
  created_by: string = localStorage.getItem('u_id');
  event_pic: any = '';
  community_id: any;
  event_verify: string = '';

  arrEvent: Events_Class[] = [];
  arrCommu: Community_Class[] = [];

  selectedFile: File = null;
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

  getPicture() {
    this.fileInput.nativeElement.click();
  }

  onFileSelected(value) {
    this.selectedFile = <File>value.target.files[0];
    this.fileFlag = true;
    console.log(value);
  }

  onEventUpdate(eventform) {
    if (this.selectedFile === null) {

      // tslint:disable-next-line:max-line-length
      this._dataEvent.updateEventOnly(new Event_update_class(this.event_id, eventform.value.event_name, eventform.value.event_des, eventform.value.event_s_time, eventform.value.event_e_time, this.event_date, eventform.value.event_loc, this.community_id)).subscribe(
        (data: any) => {
          console.log(data);
          this.router.navigate(['/events']);
        },
        function (err) {
          alert(err);
        },
        function () {

        }
      );

    } else {
      const fd = new FormData();
      fd.append('event_id', this.event_id);
      fd.append('event_name', eventform.value.event_name);
      fd.append('event_des', eventform.value.event_des);
      fd.append('image', this.selectedFile, this.selectedFile.name);
      fd.append('event_s_time', eventform.value.event_s_time);
      fd.append('event_e_time', eventform.value.event_e_time);
      fd.append('event_date', this.event_date);
      fd.append('event_loc', eventform.value.event_loc);
      fd.append('fk_comm_id', this.community_id);


      this._dataEvent.editEvent(fd).subscribe(
        (data: any) => {
          console.log(data);
          this.router.navigate(['/events']);
        },
        function (err) {
          alert(err);
        },
        function () {

        }
      );
    }
  }

}
