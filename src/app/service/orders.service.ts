import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  constructor(private http:HttpClient) { }
  postOrder(body:any){
   return this.http.post("http://localhost:3000/orders",body);
  }
}
