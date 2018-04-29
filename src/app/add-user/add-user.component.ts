import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControlName } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
import { routing } from '../app.routing';
import { MatRadioModule } from '@angular/material/radio';

import { UsersDbService } from '../providers/usersDb/users-db.service';
import { User_class } from '../shared/user_class';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(public router: Router,
    public _dataUser: UsersDbService) { }

  selectedFile: File = null;

  eid: string;
  uname: string;
  pass: string;
  gender: string;
  mobile: string;
  myDate: any;
  image: any;
  token: string;
  hide = true;

  ngOnInit() {
  }


  onFileSelected(value) {
    this.selectedFile = <File>value.target.files[0];
    console.log(value);
  }

  onAddUser(userForm) {

    this.eid = userForm.value.eid;
    this.uname = userForm.value.uname;
    this.pass = userForm.value.pass;
    this.gender = userForm.value.gender;
    this.mobile = userForm.value.mobile;
    this.myDate = userForm.value.myDate;
    this.token = userForm.value.token;

    const fd = new FormData();
    fd.append('user_id', this.eid);
    fd.append('user_name', this.uname);
    fd.append('user_pass', this.pass);
    fd.append('image', this.selectedFile, this.selectedFile.name);
    fd.append('gender', this.gender);
    fd.append('user_mob_no', this.mobile);
    fd.append('user_bdate', this.myDate);
    fd.append('token', this.token);
    // alert(this.eid);
    console.log(fd);
    console.log(this.token);
    this._dataUser.addUser(fd).subscribe(
      (data: any) => {
        alert('done');
        this.router.navigate(['/users']);
        console.log(data);
      },
      function (err) {
        alert(err);
      },
      function () {

      }
    );
  }


}
