import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormControl, Validators } from '@angular/forms';
import { routing } from '../app.routing';

import { CommunityDbService } from '../providers/communitiesDb/community-db.service';
import { CategoriesDbService } from '../providers/categoryDb/categories-db.service';
import { Category_Class } from '../shared/category_class';


@Component({
  selector: 'app-add-community',
  templateUrl: './add-community.component.html',
  styleUrls: ['./add-community.component.css']
})
export class AddCommunityComponent implements OnInit {

  comm_id: any = null;
  comm_name: string = '';
  comm_des: string = '';
  comm_pic: string = '';
  comm_date: any = null;
  created_by: string = localStorage.getItem('u_id');
  comm_rating: any = null;
  comm_fk_cat_id: string;
  category_id: any;

  arrCat: Category_Class[] = [];

  selectedFile: File = null;

  constructor(public router: Router,
    public _dataCommu: CommunityDbService,
    public _dataCategory: CategoriesDbService) { }

  ngOnInit() {
    this._dataCategory.getAllCategories().subscribe(
      (data: Category_Class[]) => {
        this.arrCat = data;
        console.log(data);
      },
      function (err) {
        alert(err);
      },
      function () {

      }
    );
  }

  onFileSelected(value) {
    this.selectedFile = <File>value.target.files[0];
    console.log(value);
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
