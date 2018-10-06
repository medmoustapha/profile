import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Profile} from '../profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
 headers: Headers = new Headers();
 options: any;

  constructor(private http: Http) {
    this.headers.append('enctype', 'multipart/from-data');
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('X-Requested-with', 'XMLHttpRequest');
    this.options = new RequestOptions({headers: this.headers});

  }

  addProfile(info) {
    const data = JSON.stringify(info);
    return this.http.post('http://127.0.0.1:8000/addprofile', data , this.options).pipe(map(res => res.json()));
  }
  showAllProfile() {
     return this.http.get('http://127.0.0.1:8000/profiles').pipe(map(res => res.json()));
  }
  showProfile(id) {
    return this.http.get('http://127.0.0.1:8000/getProfile/' + id ).pipe(map(res => res.json()));
  }
  editProfile(data) {
    console.log(data.id);
    return this.http.post('http://127.0.0.1:8000/editProfile/' + data.id , data , this.options).pipe(map(res => res.json()));
  }
  deleteProfile(id) {
    return this.http.get('http://127.0.0.1:8000/deleteProfile/' + id ).pipe(map(res => res.json()));
  }
}
