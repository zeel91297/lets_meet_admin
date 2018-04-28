import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class CategoriesDbService {

  url: string = 'https://letsmeetbackend.herokuapp.com/category/';

  constructor(public http: HttpClient) { }

  getAllCategories() {
    return this.http.get(this.url);
  }

  getCategoryById(id) {
    return this.http.get(this.url + id);
  }

  addCategory(item) {

    // tslint:disable-next-line:prefer-const
    let body = JSON.stringify(item);
    return this.http.post(this.url, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }

  deleteCategory(item) {

    return this.http.delete(this.url + item.comm_id, { headers: new HttpHeaders().set('Content-Type', 'application/json') });

  }
  editCategory(item) {

    // tslint:disable-next-line:prefer-const
    let body = JSON.stringify(item);
    return this.http.post(this.url + item.comm_id, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });

  }

}
