import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import { MatTableDataSource, MatSort, MatPaginator, Sort } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

import { Event_User_class } from '../shared/event_user_class';
import { EventsDbService } from '../providers/eventsDb/events-db.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  displayedColumns = ['check', 'event_name', 'event_pic', 'event_loc', 'fk_user_id', 'action'];
  dataSource: MatTableDataSource<Event_User_class>;
  selection = new SelectionModel<Event_User_class>(true, []);

  arrEvents: Event_User_class[] = [];
  constructor(public _dataEvent: EventsDbService,
    public router: Router) { }

  ngOnInit() {
    this._dataEvent.getAllEvents().subscribe(
      (data: Event_User_class[]) => {
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
    this.router.navigate(['/updateEvent', item.event_id]);
  }



  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }
}
