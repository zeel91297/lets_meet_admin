import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Events_Class, Event_update_class } from '../../shared/event_class';
import { Event_Community_User_Class } from '../../shared/event_community_user_class';

@Injectable()
export class EventsDbService {

  public url: string = 'https://letsmeetbackend.herokuapp.com/event/';
  url1: string = 'https://letsmeetbackend.herokuapp.com/comingEvent/';
  url2: string = 'https://letsmeetbackend.herokuapp.com/event_reg/';
  url3: string = 'https://letsmeetbackend.herokuapp.com/eventNotReg/';
  url4: string = 'https://letsmeetbackend.herokuapp.com/updateEventOnly/';
  url5: string = 'https://letsmeetbackend.herokuapp.com/deleAllEvent/';
  url6: string = 'https://letsmeetbackend.herokuapp.com/unApprovedEvent/';

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

  /*editEvent(evn: Events_Class) {
    // tslint:disable-next-line:prefer-const
    let body = JSON.stringify(evn);
    return this.http.put(this.url + evn.event_id, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }*/

  editEvent(fd: FormData) {
    return this.http.put(this.url, fd);
  }

  updateEventOnly(event: Event_update_class) {
    console.log(event);
    // tslint:disable-next-line:prefer-const
    let body = JSON.stringify(event);
    return this.http.put(this.url4, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
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

  deleteAllEvents(item: Event_Community_User_Class[]) {
    console.log(item);
    // tslint:disable-next-line:prefer-const
    let body = JSON.stringify(item);
    return this.http.post(this.url5, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }

  getUnapprovedEvents() {
    return this.http.get(this.url6);
  }

  verify_Event(event) {
    console.log(event);
    // tslint:disable-next-line:prefer-const
    let body = JSON.stringify(event);
    return this.http.put(this.url6, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }
}
