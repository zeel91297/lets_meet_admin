import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class UsersDbService {

  urlsignup: string = 'http://localhost:3000/user/';
  constructor(public http: HttpClient) { }

  getAllUser() {
    return this.http.get(this.urlsignup);
  }

}
