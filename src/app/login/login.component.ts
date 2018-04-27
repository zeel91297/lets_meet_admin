import { Component, OnInit } from '@angular/core';
import { FormsModule, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { UsersDbService } from '../providers/usersDb/users-db.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email_id: string;
  pass: string;

  constructor(public _router: Router,
    public _dataUser: UsersDbService) { }

  ngOnInit() {
  }

  onLogin(login) {

    this.email_id = login.value.email_id;
    this.pass = login.value.pass;
    console.log(this.email_id);
    console.log(this.pass);
    this._dataUser.doLogin(this.email_id, this.pass, 'admin').subscribe(
      (data1: any) => {
        console.log(data1);
        if (data1.length === 1) {
          localStorage.setItem('u_id', this.email_id);
          this._router.navigate(['/dashboard']);
        } else {
          if (this.email_id.length === 1) {
            if (this.pass.length !== 1) {
              alert('password is wrong');
            }
          } else {
            alert('Incorrect Email and Password');
          }
        }
      },
      function (e) {
        alert(e);
      }
    );
  }
}
