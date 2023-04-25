import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor( private http:HttpClient) { }
  getBooks(){
    return this.http.get<any>('http://localhost:3000/products');
  }
  getBookId(id:number){
    return this.http.get<any>('http://localhost:3000/products'+'/'+id);
  }
  postBooks(){
    return   this.http.post<any>('http://localhost:3000/products',{});
  }
}
