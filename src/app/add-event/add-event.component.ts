import { Component, OnInit, ViewChild } from '@angular/core';
import { EventsDbService } from '../providers/eventsDb/events-db.service';
import { FormControl, Validators } from '@angular/forms';

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
  created_by: any = 'zeel91297@gmail.com';
  event_pic: any = '';
  community_id: any = 4;
  event_verify: any = '';

  selectedFile: File = null;

  constructor(public _dataEvent: EventsDbService) { }

  ngOnInit() {
  }

  onFileSelected(value) {
    this.selectedFile = <File>value.target.files[0];
    console.log(value);
  }

  addEvents() {
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
      },
      function (e) {
        alert(e);
      },
      function () {
      }
    );

  }
}
