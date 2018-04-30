import { Component, OnInit } from '@angular/core';
import { UsersDbService } from '../providers/usersDb/users-db.service';
import { CommunityDbService } from '../providers/communitiesDb/community-db.service';
import { EventsDbService } from '../providers/eventsDb/events-db.service';
import { Events_Class } from '../shared/event_class';
import { Community_Class } from '../shared/community_class';
import { User_class } from '../shared/user_class';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  ecnt: number;
  ucnt: number;
  ccnt: number;
  arrEvent: Events_Class[] = [];
  arrCommu: Community_Class[] = [];
  arrUser: User_class[] = [];

  constructor(
    public _dataUser: UsersDbService,
    public _dataCommunity: CommunityDbService,
    public _dataEvent: EventsDbService,
  ) { }

  ngOnInit() {
    this._dataEvent.getAllEventsCount().subscribe(
      (data: any) => {
        this.arrEvent = data;
        this.ecnt = this.arrEvent.length;
      },
      function (err) {
        alert(err);
      },
      function () {

      }
    );

    this._dataCommunity.getAllCommunititesCount().subscribe(
      (data: any) => {
        this.arrCommu = data;
        this.ccnt = this.arrCommu.length;
      },
      function (err) {
        alert(err);
      },
      function () {

      }
    );

    this._dataUser.getAllUsersCount().subscribe(
      (data: any) => {
        this.arrUser = data;
        this.ucnt = this.arrUser.length;
      },
      function (err) {
        alert(err);
      },
      function () {

      }
    );
  }

}
