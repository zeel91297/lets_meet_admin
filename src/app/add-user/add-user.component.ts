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
  user_id: string = '';
  user_name: string = '';
  user_pass: string = '';
  user_pic: string = '';
  user_gender: string = '';
  user_mob_no: string = '';
  user_bdate: any;

  ngOnInit() {
  }


  onFileSelected(value) {
    this.selectedFile = <File>value.target.files[0];
    console.log(value);
  }

  onAddUser(userForm) {

    this.user_id = userForm.value.user_email;
    this.user_name = userForm.value.user_name;
    this.user_pass = userForm.value.user_pass;
    this.user_gender = userForm.value.user_gender;
    this.user_mob_no = userForm.value.user_mob_no;
    this.user_bdate = userForm.value.user_bdate;

    console.log(this.user_id + '' + this.user_gender + '' + this.user_name + '' + this.user_pass + '' + this.user_mob_no);

    const fd = new FormData();
    fd.append('user_id', this.user_id);
    fd.append('user_name', this.user_name);
    fd.append('user_pass', this.user_pass);
    fd.append('image', this.selectedFile, this.selectedFile.name);
    fd.append('gender', this.user_gender);
    fd.append('user_mob_no', this.user_mob_no);
    fd.append('user_bdate', this.user_bdate);
    console.log(fd);
    this._dataUser.addUser(fd).subscribe(
      (data: User_class) => {
        // alert("added");
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
