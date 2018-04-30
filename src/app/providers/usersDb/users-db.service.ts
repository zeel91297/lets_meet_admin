import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { email_class } from '../../shared/email_class';


@Injectable()
export class UsersDbService {

  urluser: string = 'https://letsmeetbackend.herokuapp.com/user/';
  urlsignup: string = 'http://localhost:3000/user/';
  urlUpdate: string = 'https://letsmeetbackend.herokuapp.com/updateUserOnly';
  url: string = 'https://letsmeetbackend.herokuapp.com/login';
  urlPass: string = 'http://localhost:3000/demomail';
  urlCnt: string = 'http://letsmeetbackend.herokuapp.com/ucount/';

  account: { user_id: string, user_pass: string, token: string } = {
    user_id: '',
    user_pass: '',
    token: ''
  };
  constructor(public http: HttpClient) { }

  getAllUser() {
    return this.http.get(this.urluser);
  }
  getUser(id: string) {
    return this.http.get(this.urluser + id);
  }

  doLogin(eid, pass, token) {
    this.account.user_id = eid;
    this.account.user_pass = pass;
    this.account.token = token;
    console.log(this.account);
    // tslint:disable-next-line:prefer-const
    let body = JSON.stringify(this.account);
    return this.http.post(this.url, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }

  addUser(fd: FormData) {
    console.log(fd);
    return this.http.post(this.urluser, fd);
  }

  editUser(fd: FormData) {
    console.log(fd);
    return this.http.put(this.urluser, fd);
  }

  editUserOnly(item) {
    console.log(item);
    // tslint:disable-next-line:prefer-const
    let body = JSON.stringify(item);
    return this.http.put(this.urlUpdate, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }

  sendMail(demo: email_class) {
    // tslint:disable-next-line:prefer-const
    let body = JSON.stringify(demo);
    console.log(demo.name);
    console.log(demo.message);
    console.log(demo.subject);
    return this.http.post(this.urlPass, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }

  deleteUser(id) {
    return this.http.delete(this.urluser + id, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }

  getAllUsersCount() {
    return this.http.get(this.urlCnt);
  }
}
