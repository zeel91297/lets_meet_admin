import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post_Class, Post_Update_Class } from '../../shared/post_class';

@Injectable()
export class PostsDbService {

  url: string = 'https://letsmeetbackend.herokuapp.com/post/';
  url1: string = 'https://letsmeetbackend.herokuapp.com/deletePost/';
  url2: string = 'https://letsmeetbackend.herokuapp.com/updatePostOnly/';

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

  editPostOnly(post: Post_Update_Class) {
    // tslint:disable-next-line:prefer-const
    let body = JSON.stringify(post);
    return this.http.put(this.url2, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
    // return this.http.put(this.url, fd);
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
