import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import { MatTableDataSource, MatSort, MatPaginator, Sort } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

import { User_class } from '../shared/user_class';
import { UsersDbService } from '../providers/usersDb/users-db.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns = ['user_id', 'user_name', 'user_pic', 'gender', 'action'];
  dataSource: MatTableDataSource<User_class>;
  selection = new SelectionModel<User_class>(true, []);

  arrUser: User_class[] = [];

  constructor(public _dataUser: UsersDbService,
    public router: Router) { }

  ngOnInit() {
    this._dataUser.getAllUser().subscribe(
      (data: User_class[]) => {
        this.arrUser = data;
        console.log(data);
        this.dataSource = new MatTableDataSource(this.arrUser);
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

  deleteUser(item) {

    this._dataUser.deleteUser(item.user_id).subscribe(
      (data: any) => {
        // this.router.navigate(['/users']);
        this.ngOnInit();
      },
      function (err) {
        alert(err);
      },
      function () {

      }
    );
  }
  updateUser(item) {
    this.router.navigate(['/updateuser', item.user_id]);
  }
}
