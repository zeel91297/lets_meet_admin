import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Community_Class, Update_Community_Class } from '../../shared/community_class';

@Injectable()
export class CommunityDbService {

  // url: string = 'https://letsmeetbackend.herokuapp.com/community/';
  url: string = 'https://letsmeetbackend.herokuapp.com/community/';
  url1: string = 'https://letsmeetbackend.herokuapp.com/updateCommunityOnly';

  constructor(public http: HttpClient) { }

  getAllCommunities() {
    return this.http.get(this.url);
  }

  getCommunityById(id) {
    return this.http.get(this.url + id);
  }

  addCommunity(fd: FormData) {
    return this.http.post(this.url, fd);
  }

  deleteCommunity(item: Community_Class) {

    return this.http.delete(this.url + item.comm_id, { headers: new HttpHeaders().set('Content-Type', 'application/json') });

  }
  editCommunityOnly(item: Update_Community_Class) {
    console.log(item);

    // tslint:disable-next-line:prefer-const
    let body = JSON.stringify(item);
    return this.http.put(this.url1, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }

  editCommunity(fd: FormData) {
    return this.http.put(this.url, fd);
  }

}
