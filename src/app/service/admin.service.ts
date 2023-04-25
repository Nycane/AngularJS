import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { books } from '../model/books.model';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  login(){
   return this.http.get<any>("http://localhost:3000/admin")
  }
  getProducts(){
    return this.http.get<any>("http://localhost:3000/products")
  }
  postProduct(book:books){
   return this.http.post("http://localhost:3000/products",book);
  }
  deleteBook(id:number){
    return this.http.delete('http://localhost:3000/products/'+id)
  }
  updateBook(id:number,book:any){
    return this.http.patch('http://localhost:3000/products/'+id,book)
  }
  patchProduct(){

  }
  getOrders(){
    return this.http.get<any>("http://localhost:3000/orders")
  }
}
