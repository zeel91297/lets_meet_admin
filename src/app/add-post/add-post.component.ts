import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormControl, Validators } from '@angular/forms';
import { routing } from '../app.routing';

import { PostsDbService } from '../providers/postsDb/posts-db.service';
import { CommunityDbService } from '../providers/communitiesDb/community-db.service';
import { Community_Class } from '../shared/community_class';
import { Post_Class } from '../shared/post_class';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  community_id: any;
  user_id: string = 'zeel91297@gmail.com';
  post_title: string;
  post_des: string;

  arrCommu: Community_Class[] = [];

  selectedFile: File = null;

  constructor(public router: Router,
    public _dataPost: PostsDbService,
    public _dataCommu: CommunityDbService) { }

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

  onAddPost(postForm) {

    this.post_title = postForm.value.post_title;
    this.post_des = postForm.value.post_des;

    const fd = new FormData();
    fd.append('post_id', null);
    fd.append('post_title', this.post_title);
    fd.append('post_des', this.post_des);
    fd.append('image', this.selectedFile, this.selectedFile.name);
    fd.append('post_date', null);
    fd.append('post_fk_user_id', this.user_id);
    fd.append('fk_comm_id', this.community_id);
    this._dataPost.addPost(fd).subscribe(
      (data: Post_Class) => {
        // alert("added");
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
