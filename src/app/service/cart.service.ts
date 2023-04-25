import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { books } from '../model/books.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private http:HttpClient) { }
  carts:any[]=[];
  listProducts:any = new BehaviorSubject<any>([]);
  totalMoney:any= new BehaviorSubject<any>(0);
  getProducts(){
    return this.listProducts;
  }
  getTotalMoney(){
    return this.totalMoney;
  }
  xoahet(){
    this.carts=[];
    this.listProducts.next(this.carts);
  }
  addProduct(product:any){
    if(this.carts.length>0){
      let index:any;
      index=this.carts.findIndex(e=>{
       return e.id==product.id
      })
      console.log(index)
      if(index!=-1){
        this.carts[index]['quantity']++;
        this.carts[index]['total']=this.carts[index]['quantity']*this.carts[index]['price']
        this.totalProduct();
        this.listProducts.next(this.carts);
      }else{
         this.carts.push(product);
         this.listProducts.next(this.carts);
         this.totalProduct()
      }
      return;
    }
    this.carts.push(product);
    this.listProducts.next(this.carts);
    this.totalProduct()
    console.log(this.carts)
  }
  totalProduct(){
    let total:number=0;
    this.carts.forEach(e=>{
      console.log(e)
      total+=JSON.parse(e.price)*e.quantity;
    })
    console.log("total",total)
    this.totalMoney.next(total);
  }
  updateProduct(id:number,quantity:number){
    let index:any;
    index=this.carts.findIndex(e=>{
      return e.id==id && e.quantity==quantity
    })
    this.carts[index]['total']=quantity*this.carts[index]['price'];
    console.log("Cart",this,this.carts)
    this.totalProduct();
    this.listProducts.next(this.carts)
  }
  removeProduct(i:any){
    let index:any;
    index=this.carts.findIndex(e=>e.id==i)
    console.log("service",index)
    this.carts.splice(index,1);
    this.listProducts.next(this.carts);
    this.totalProduct();
  }
}
