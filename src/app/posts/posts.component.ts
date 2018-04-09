import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AnonymousSubscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

import { MatTableDataSource, MatSort, MatPaginator, Sort } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

import { Post_Class } from '../shared/post_class';
import { PostsDbService } from '../providers/postsDb/posts-db.service';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit, OnDestroy {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  private timerSubscription: AnonymousSubscription;
  private postsSubscription: AnonymousSubscription;

  displayedColumns = ['check', 'post_title', 'post_date', 'post_fk_user_id', 'fk_comm_id', 'action'];
  dataSource: MatTableDataSource<Post_Class>;
  selection = new SelectionModel<Post_Class>(true, []);

  arrPost: Post_Class[] = [];

  constructor(public _dataPost: PostsDbService,
    public router: Router) { }

  ngOnInit() {
    // this._dataPost.getAllPosts().subscribe(
    //   (data: Post_Class[]) => {
    //     this.arrPost = data;
    //     console.log(data);
    //     this.dataSource = new MatTableDataSource(this.arrPost);
    //     this.dataSource.paginator = this.paginator;
    //     this.dataSource.sort = this.sort;
    //   },
    //   function (err) {
    //     alert(err);
    //   },
    //   function () {

    //   }
    // );
    this.refreshData();
  }

  public ngOnDestroy(): void {
    if (this.postsSubscription) {
      this.postsSubscription.unsubscribe();
    }
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }
  private subscribeToData(): void {

    this.timerSubscription = Observable.timer(5000)
      .subscribe(() => this.refreshData());
  }
  private refreshData(): void {
    this.postsSubscription = this._dataPost.getAllPosts().subscribe(

      (data: Post_Class[]) => {
        this.arrPost = data;
        this.subscribeToData();
      },
      function (error) {
        console.log(error);
      },
      function () {
        console.log('complete');
      }
    );
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  deletePost(item) {
    event.stopPropagation();
    this._dataPost.deletePost(item).subscribe(
      (data: Post_Class) => {
        this.ngOnInit();
      },
      function (err) {
        alert(err);
      },
      function () {

      }
    );

  }

  updatePost(item) {
    this.router.navigate(['/updatePost', item.post_id]);
  }
}

