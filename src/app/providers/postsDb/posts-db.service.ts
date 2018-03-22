import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post_Class } from '../../shared/post_class';

@Injectable()
export class PostsDbService {

  url: string = 'http://localhost:3000/post/';
  url1: string = 'http://localhost:3000/deletePost/';
  url2: string = 'http://localhost:3000/updatePostOnly/';

  constructor(public http: HttpClient) { }

  getPostById(id: number) {
    return this.http.get(this.url + id);
  }

  getAllPosts() {
    return this.http.get(this.url);
  }
  /*addPost(post: Post_Class) {
    let body = JSON.stringify(post);
    return this.http.post(this.url, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }*/

  addPost(fd: FormData) {
    return this.http.post(this.url, fd);
  }

  editPostOnly(fd: FormData) {
    // tslint:disable-next-line:prefer-const
    // let body = JSON.stringify(post);
    // return this.http.put(this.url, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
    return this.http.put(this.url, fd);
  }

  editPost(fd: FormData) {
    return this.http.put(this.url, fd);
  }

  deletePost(post) {
    // tslint:disable-next-line:prefer-const
    let body = JSON.stringify(post);
    return this.http.post(this.url1, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }

}
