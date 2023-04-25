import { AfterContentInit, Component, DoCheck, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
import { SearchService } from 'src/app/service/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit,DoCheck{
  constructor(private router:Router,private cart:CartService,private handelFind:SearchService){

  }
  lengthCart:any
  user:boolean=false;
  search:string="";
  ngDoCheck(): void {
    this.kiemtraUser()
  }
  ngOnInit(): void {
  this.getLengthCarts()
  }
  handelSearch(){
  this.handelFind.find(this.search)
  }
  getLengthCarts(){
    this.cart.getProducts().subscribe((res:any)=>{
      this.lengthCart=res.length;
    })
  }
  kiemtraUser(){
    // console.log("header")
    console.log(localStorage.getItem('user'))
   if(localStorage.getItem('user')!=null){
    this.user=true;
   }else{
    this.user=false;
   }
  }
  logout(){
    localStorage.removeItem('user');
    alert("Đăng Xuất Thành Công")
    this.router.navigate(['/client/login']);
  }

}
