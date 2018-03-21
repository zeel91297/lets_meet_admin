import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import { MatTableDataSource, MatSort, MatPaginator, Sort } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

import { CommunityDbService } from '../providers/communitiesDb/community-db.service';
import { Community_Class } from '../shared/community_class';

@Component({
  selector: 'app-communities',
  templateUrl: './communities.component.html',
  styleUrls: ['./communities.component.css']
})
export class CommunitiesComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns = ['comm_name', 'comm_pic', 'comm_date', 'created_by', 'action'];
  dataSource: MatTableDataSource<Community_Class>;
  // selection = new SelectionModel<Community_Class>(true, []);
  selection: SelectionModel<Community_Class>;

  arrCommu: Community_Class[] = [];

  constructor(public _dataCommu: CommunityDbService,
    public router: Router) { }

  ngOnInit() {
    this._dataCommu.getAllCommunities().subscribe(
      (data: Community_Class[]) => {
        this.arrCommu = data;
        console.log(data);
        this.dataSource = new MatTableDataSource(this.arrCommu);
        this.selection = new SelectionModel(true, []);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
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


  deleteCommunity(item) {
    this._dataCommu.deleteCommunity(item).subscribe(
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

  updateCommunity(item) {
    this.router.navigate(['/updateCommunity', item.comm_id]);
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
