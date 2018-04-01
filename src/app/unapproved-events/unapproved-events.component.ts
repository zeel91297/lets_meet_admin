import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import { MatTableDataSource, MatSort, MatPaginator, Sort } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

import { EventsDbService } from '../providers/eventsDb/events-db.service';
import { Event_Community_User_Class } from '../shared/event_community_user_class';

@Component({
  selector: 'app-unapproved-events',
  templateUrl: './unapproved-events.component.html',
  styleUrls: ['./unapproved-events.component.css']
})
export class UnapprovedEventsComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  displayedColumns = ['check', 'event_name', 'event_pic', 'event_loc', 'comm_name', 'fk_user_id', 'action'];
  dataSource: MatTableDataSource<Event_Community_User_Class>;
  selection = new SelectionModel<Event_Community_User_Class>(true, []);

  arrEvents: Event_Community_User_Class[] = [];
  delarr: Event_Community_User_Class[] = [];
  i: number;

  constructor(public _dataEvent: EventsDbService,
    public router: Router) { }

  ngOnInit() {
    this._dataEvent.getUnapprovedEvents().subscribe(
      (data: Event_Community_User_Class[]) => {
        this.arrEvents = data;
        console.log(data);
        this.dataSource = new MatTableDataSource(this.arrEvents);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      function (err) {
        alert(err);
      },
      function () {

      }
    );
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
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
    this._dataEvent.verify_Event(item).subscribe(
      (data: any) => {
        alert('Event verified');
        this.ngOnInit();
      },
      function (err) {
        alert(err);
      },
      function () {

      }
    );
  }

  checkChange(item: Event_Community_User_Class) {

    if (this.delarr.find(x => x === item)) {
      this.delarr.splice(this.delarr.indexOf(item), 1);
    } else {
      this.delarr.push(item);
    }
    console.log(this.delarr);
  }

  deleteAll() {
    if (confirm('Are you sure you want to delete')) {

      this._dataEvent.deleteAllEvents(this.delarr).subscribe(
        (data: any) => {
          for (this.i = 0; this.i < this.delarr.length; this.i++) {
            this.arrEvents.splice(this.arrEvents.indexOf(this.delarr[this.i]), 1);
            console.log('DONE');
          }
          this.ngOnInit();
          // this.hotel1 = [];
        },
        function (err) {
          console.log(err);
        },
        function () {
        });
    }
  }

  viewDetails(item: Event_Community_User_Class) {
    this.router.navigate(['/viewEvent', item.event_id]);
  }

}
