import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User_class } from '../shared/user_class';
import { UsersDbService } from '../providers/usersDb/users-db.service';

// tslint:disable-next-line:import-blacklist
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  public _subscription: Subscription;
  public uid:string;
  public uname:string="";
  public upass:string="";
  public ugender:string="";
  public umob:string="";
  public upic:string="";
  public utype:string="";
  arrPost: User_class[] = [];
  constructor(public router: Router,
    public activatedRoute: ActivatedRoute,
    public data:UsersDbService
    ) { }

  ngOnInit() {
    this._subscription = this.activatedRoute.params.subscribe(
      (para: any) => {
        this.uid = para['id'];
        console.log(this.uid);
      }
    );

    this.data.getUser(this.uid).subscribe(
      (data: User_class[]) => {
        this.arrPost = data;
        console.log(this.arrPost);
        // this. = this.arrPost[0].post_title;
        // this.post_des = this.arrPost[0].post_des;
        // this.post_pic = this.arrPost[0].post_pic;
        /* this.uname=this.arrPost[0].user_name;
        this.umob=this.arrPost[0].user_mob_no;
        this.ugender=this.arrPost[0].user_gender;
        this.upass=this.arrPost[0].user_pass;
        console.log(this.post_pic); */
      },
      function (err) {
        alert(err);
      },
      function () {

      }
    );
  }

}
