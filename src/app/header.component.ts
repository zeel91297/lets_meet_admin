import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UsersDbService } from './providers/usersDb/users-db.service';
import { User_class } from './shared/user_class';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  panelOpenState: boolean = false;

  user_name: string;
  user_pic: string;
  user_id: string;

  arruser: User_class[] = [];
  constructor(public _router: Router,
    public _dataUser: UsersDbService) { }

  ngOnInit() {
    this.user_id = localStorage.getItem('u_id');
    if (this.user_id == null) {
      this._router.navigate(['/login']);
    }
    this._dataUser.getUser(this.user_id).subscribe(
      (data: User_class[]) => {
        this.arruser = data;
        this.user_name = this.arruser[0].user_name;
        this.user_pic = this.arruser[0].user_pic;
      }
    );
  }
  logout() {
    localStorage.clear();
    this._router.navigate(['/login']);
  }
}
