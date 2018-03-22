import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class UsersDbService {

  urluser: string = 'http://localhost:3000/user/';
  urlsignup: string = 'http://localhost:3000/user/';
  url: string = 'http://localhost:3000/login';
  account: { user_id: string, user_pass: string } = {
    user_id: '',
    user_pass: ''
  };
  constructor(public http: HttpClient) { }

  getAllUser() {
    return this.http.get(this.urlsignup);
  }
  getUser(id: string) {
    return this.http.get(this.urlsignup + id);
  }

  doLogin(eid, pass) {
    // let header = new Headers({ 'Content-Type': 'application/json' });
    // let ro = new RequestOptions({ headers: header });
    this.account.user_id = eid;
    this.account.user_pass = pass;
    // tslint:disable-next-line:prefer-const
    let body = JSON.stringify(this.account);
    return this.http.post(this.url, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }
}
