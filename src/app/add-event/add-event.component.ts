import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormControlName } from '@angular/forms';

import { EventsDbService } from '../providers/eventsDb/events-db.service';
import { CommunityDbService } from '../providers/communitiesDb/community-db.service';

import { FormControl, Validators } from '@angular/forms';
import { routing } from '../app.routing';

import { Community_Class } from '../shared/community_class';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  event_id: any = null;
  event_name: any = '';
  event_des: any = '';
  event_s_time: any;
  event_e_time: any;
  event_date: any;
  event_loc: any = '';
  created_by: string = localStorage.getItem('u_id');
  event_pic: any = '';
  community_id: any;
  event_verify: any = '';

  selectedFile: File = null;

  arrCommu: Community_Class[] = [];

  constructor(public _dataEvent: EventsDbService,
    public _dataCommu: CommunityDbService,
    public router: Router) { }

  ngOnInit() {

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

  onFileSelected(value) {
    this.selectedFile = <File>value.target.files[0];
    console.log(value);
  }


  onAdd(eventform) {
    this.event_name = eventform.value.event_name;
    this.event_des = eventform.value.event_des;
    this.event_s_time = eventform.value.event_s_time;
    this.event_e_time = eventform.value.event_e_time;
    this.event_date = eventform.value.event_date;
    this.event_loc = eventform.value.event_loc;
    this.community_id = eventform.value.community_id;
    const fd = new FormData();
    fd.append('event_id', this.event_id);
    fd.append('event_name', this.event_name);
    fd.append('event_des', this.event_des);
    fd.append('image', this.selectedFile, this.selectedFile.name);
    fd.append('event_s_time', this.event_s_time);
    fd.append('event_e_time', this.event_e_time);
    fd.append('event_date', this.event_date);
    fd.append('event_loc', this.event_loc);
    fd.append('fk_user_id', this.created_by);
    fd.append('fk_comm_id', this.community_id);
    fd.append('event_verify', 'true');

    this._dataEvent.addEvent(fd).subscribe(
      (data: any) => {
        console.log(data);
        this.router.navigate(['/events']);
      },
      function (e) {
        alert(e);
      },
      function () {
      }
    );
  }
}
