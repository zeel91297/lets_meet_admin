import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { User_class, Update_User_Class } from '../shared/user_class';
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
  eid: string;
  uname: string;
  gender: string;
  mobile: string;
  myDate: any;
  user_pic: any;
  token: string;

  arrUser: User_class[] = [];

  selectedFile: File = null;
  constructor(public router: Router,
    public activatedRoute: ActivatedRoute,
    public dataUser: UsersDbService
  ) { }

  ngOnInit() {
    this._subscription = this.activatedRoute.params.subscribe(
      (para: any) => {
        this.eid = para['id'];
        console.log(this.eid);
      }
    );

    this.dataUser.getUser(this.eid).subscribe(
      (data: User_class[]) => {
        this.arrUser = data;
        console.log(this.arrUser);
        this.uname = this.arrUser[0].user_name;
        this.gender = this.arrUser[0].gender;
        this.mobile = this.arrUser[0].user_mob_no;
        this.user_pic = this.arrUser[0].user_pic;
        this.token = this.arrUser[0].token;
        this.myDate = this.arrUser[0].user_bdate;
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
    console.log(value);
  }

  onUpdateUser(userForm) {

    if (this.selectedFile === null) {

      this.dataUser.editUserOnly(new Update_User_Class(this.eid, this.uname, this.gender, this.mobile, this.myDate, this.token)).subscribe(
        (data: any) => {
          console.log(data);
          this.router.navigate(['/users']);
        },
        function (err) {
          alert(err);
        },
        function () {

        }
      );

    } else {
      this.uname = userForm.value.uname;
      this.gender = userForm.value.gender;
      this.mobile = userForm.value.mobile;
      this.myDate = userForm.value.myDate;
      this.token = userForm.value.token;
      const fd = new FormData();
      fd.append('user_id', this.eid);
      fd.append('user_name', this.uname);
      fd.append('image', this.selectedFile, this.selectedFile.name);
      fd.append('gender', this.gender);
      fd.append('user_mob_no', this.mobile);
      fd.append('user_bdate', this.myDate);
      fd.append('token', this.token);

      this.dataUser.editUser(fd).subscribe(
        (data: any) => {
          console.log(data);
          this.router.navigate(['/users']);
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
