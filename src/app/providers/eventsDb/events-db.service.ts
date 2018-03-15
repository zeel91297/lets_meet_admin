import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Events_Class } from '../../shared/event_class';

@Injectable()
export class EventsDbService {

  public url: any = 'http://localhost:3000/event/';
  url1: any = 'http://localhost:3000/comingEvent/';
  url2: any = 'http://localhost:3000/event_reg/';
  url3: any = 'http://localhost:3000/eventNotReg/';
  constructor(public http: HttpClient) { }

  getAllEvents() {
    return this.http.get(this.url);
  }

  /*getAllEvents() {
    return this.http.get(this.url1);
  }*/

  /*addEvent(evn: Events_Class) {
    let body = JSON.stringify(evn);
    return this.http.post(this.url, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }*/
  addEvent(fd: FormData) {
    return this.http.post(this.url, fd);
  }

  editEvent(evn: Events_Class) {
    // tslint:disable-next-line:prefer-const
    let body = JSON.stringify(evn);
    return this.http.put(this.url + evn.event_id, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }

  deleteEvent(evn: Events_Class) {
    return this.http.delete(this.url + evn.event_id, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }

  getEventById(id) {
    return this.http.get(this.url + id);
  }

  getRegisteredEventsofUser(id) {
    console.log(id);
    return this.http.get(this.url2 + id);
  }

  getNotRegisteredEventsofUser(id) {
    return this.http.get(this.url3 + id);
  }

}
