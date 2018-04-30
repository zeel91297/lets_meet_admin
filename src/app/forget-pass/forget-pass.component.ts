import { Component, OnInit } from '@angular/core';

import { UsersDbService } from '../providers/usersDb/users-db.service';
import { NgProgress } from 'ngx-progressbar';
import { User_class } from '../shared/user_class';
import { email_class } from '../shared/email_class';

@Component({
  selector: 'app-forget-pass',
  templateUrl: './forget-pass.component.html',
  styleUrls: ['./forget-pass.component.css']
})
export class ForgetPassComponent implements OnInit {

  user_email: string = '';
  u: User_class[] = [];
  constructor(public _data: UsersDbService,
    public ngProgress: NgProgress) { }

  ngOnInit() {
  }

  forgerPassword() {
    this.ngProgress.start();
    if (this.user_email === '') {
      alert('Please enter email address');
      this.ngProgress.done();
    } else {
      this._data.getUser(this.user_email).subscribe(
        (data: User_class[]) => {
          this.u = data;
          console.log(data);
          if (data.length === 1) {
            // tslint:disable-next-line:max-line-length
            const message = 'Hello ' + this.user_email + '. You have requested to reset the password. your password is ' + this.u[0].user_pass + ' . Password is one of the confidential thing, Do not share it with anyone.';
            alert('Email has been sent to your ' + this.user_email);
            // this.ngProgress.done();
            this._data.sendMail(new email_class(message, this.user_email, 'Resetting the password of Lets_Meet.'))
              .subscribe(
                (data1: any) => {
                  console.log('mail sent');

                },
                function (e) {
                  alert(e);
                },
                function () {
                  this.ngProgress.done();
                }
              );
          } else {
            alert('please enter correct email address');
            this.ngProgress.done();
          }
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
