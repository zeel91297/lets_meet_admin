import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import { MatTableDataSource, MatSort, MatPaginator, Sort } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

import { Events_Class } from '../shared/event_class';
import { EventsDbService } from '../providers/eventsDb/events-db.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit, AfterViewInit {


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  displayedColumns = ['event_name', 'event_des', 'event_loc', 'fk_user_id', 'action'];
  dataSource: MatTableDataSource<Events_Class>;
  selection = new SelectionModel<Events_Class>(true, []);

  arrEvents: Events_Class[] = [];
  constructor(public _dataEvent: EventsDbService,
    public router: Router) { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {
    this._dataEvent.getAllEvents().subscribe(
      (data: Events_Class[]) => {
        this.arrEvents = data;
        console.log(data);
        this.dataSource = new MatTableDataSource(this.arrEvents);
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
