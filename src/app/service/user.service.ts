import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http :HttpClient) { }

  getUser(){
    return this.http.get<any>('http://localhost:3000/user');
  }
  postUser(body:user){
    return this.http.post<any>('http://localhost:3000/user',body)
  }
}
