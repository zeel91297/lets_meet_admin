import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { Subscription } from 'Rxjs/Rx';
import { routing } from '../app.routing';

import { PostsDbService } from '../providers/postsDb/posts-db.service';
import { Post_Class, Post_Update_Class } from '../shared/post_class';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {

  @ViewChild('fileInput') fileInput: ElementRef;

  public _subscription: Subscription;

  post_id: any;

  arrPost: Post_Class[] = [];
  post_title: string;
  post_des: string;
  post_pic: string;

  selectedFile: File = null;
  fileFlag: Boolean = false;

  constructor(
    public router: Router,
    public _dataPost: PostsDbService,
    public activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this._subscription = this.activatedRoute.params.subscribe(
      (data: any) => {
        this.post_id = data['id'];
      }
    );

    this._dataPost.getPostById(this.post_id).subscribe(
      (data: Post_Class[]) => {
        this.arrPost = data;
        this.post_title = this.arrPost[0].post_title;
        this.post_des = this.arrPost[0].post_des;
        this.post_pic = this.arrPost[0].post_pic;
        console.log(this.post_pic);
      },
      function (err) {
        alert(err);
      },
      function () {

      }
    );
  }

  onFileSelected(value) {
    this.selectedFile = <File>value.target.files[0];
    this.fileFlag = true;
    console.log(value);
  }

  getPicture() {
    this.fileInput.nativeElement.click();
  }

  onUpdatePost(postForm) {
    this.post_title = postForm.value.post_title;
    this.post_des = postForm.value.post_des;

    if (this.selectedFile === null) {
      const fd = new FormData();
      fd.append('post_id', this.post_id);
      fd.append('post_title', this.post_title);
      fd.append('post_des', this.post_des);

      this._dataPost.editPostOnly(new Post_Update_Class(this.post_id, this.post_title, this.post_des)).subscribe(
        (data: any) => {
          console.log(data);
          this.router.navigate(['/posts']);
        },
        function (err) {
          alert(err);
        },
        function () {

        }
      );

    } else {
      const fd = new FormData();
      fd.append('post_id', this.post_id);
      fd.append('post_title', this.post_title);
      fd.append('post_des', this.post_des);
      fd.append('image', this.selectedFile, this.selectedFile.name);

      this._dataPost.editPost(fd).subscribe(
        (data: any) => {
          console.log(data);
          this.router.navigate(['/posts']);
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
