import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// tslint:disable-next-line:import-blacklist
import { Subscription } from 'rxjs/Rx';
import { EventsDbService } from '../providers/eventsDb/events-db.service';
import { CommunityDbService } from '../providers/communitiesDb/community-db.service';
import { FormControl, Validators } from '@angular/forms';
import { routing } from '../app.routing';
import { Category_Class } from '../shared/category_class';
import { CategoriesDbService } from '../providers/categoryDb/categories-db.service';
import { Community_User_Category_Class } from '../shared/community_user_class';

@Component({
  selector: 'app-update-community',
  templateUrl: './update-community.component.html',
  styleUrls: ['./update-community.component.css']
})
export class UpdateCommunityComponent implements OnInit {

  comm_id: any;
  comm_name: string = '';
  comm_des: string = '';
  comm_pic: string = '';
  comm_date: any = null;
  created_by: string = localStorage.getItem('u_id');
  comm_rating: any = null;
  comm_fk_cat_id: any;
  cat_name: string;

  arrCat: Category_Class[] = [];
  arrCommu: Community_User_Category_Class[] = [];
  selectedFile: File = null;
  public _subscription: Subscription;

  constructor(public router: Router,
    public activatedRoute: ActivatedRoute,
    public _dataCommu: CommunityDbService,
    public _dataCategory: CategoriesDbService) { }

  ngOnInit() {
    this._subscription = this.activatedRoute.params.subscribe(
      (para: any) => {
        this.comm_id = para['id'];
        console.log(this.comm_id);
      }
    );

    this._dataCommu.getCommunityById(this.comm_id).subscribe(
      (data: Community_User_Category_Class[]) => {
        this.arrCommu = data;
        console.log(data);
        this.comm_name = this.arrCommu[0].comm_name;
        this.comm_des = this.arrCommu[0].comm_des;
        this.comm_pic = this.arrCommu[0].comm_pic;
        this.comm_fk_cat_id = this.arrCommu[0].cat_id;
        this.cat_name = this.arrCommu[0].cat_name;
      }
    );

    this._dataCategory.getAllCategories().subscribe(
      (data: Category_Class[]) => {
        this.arrCat = data;
      },
      function (err) {
        alert(err);
      },
      function () {

      }
    );
  }


  onAddCommunity(commuForm) {

    this.comm_name = commuForm.value.comm_name;
    this.comm_des = commuForm.value.comm_des;
    this.comm_fk_cat_id = commuForm.value.category_id;

    const fd = new FormData();
    alert(this.created_by);
    fd.append('comm_id', this.comm_id);
    fd.append('comm_name', this.comm_name);
    fd.append('comm_des', this.comm_des);
    fd.append('image', this.selectedFile, this.selectedFile.name);
    fd.append('comm_date', this.comm_date);
    fd.append('comm_rating', this.comm_rating);
    fd.append('created_by', this.created_by);
    fd.append('comm_fk_cat_id', this.comm_fk_cat_id);

    this._dataCommu.addCommunity(fd).subscribe(
      (data: any) => {
        alert('Done');
        this.router.navigate(['/communities']);
      },
      function (err) {
        alert(err);
      },
      function () {
      }
    );
  }

}
