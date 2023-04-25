import { Component, OnInit,DoCheck  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from 'src/app/service/books.service';
import { CartService } from 'src/app/service/cart.service';
import { OrdersService } from 'src/app/service/orders.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
constructor(private route:ActivatedRoute,private cart:CartService,private router:Router,private order:OrdersService){}
  
  carts:any;
  totalCart:any;
  ngOnInit(): void {
    this.getProducts();
  }
  capnhat(idproduct:any,quantity:number){
    this.cart.updateProduct(idproduct,quantity);
  }
  xoahet(){
    this.cart.xoahet()
  }
  thanhtoan(){
    if(localStorage.getItem('user')!=null){
      let total= this.carts.reduce((intial:any,e:any)=>{
        return intial+parseInt(e.price)*e.quantity;
    },0)
      let kq:any=localStorage.getItem('user');
      let user:any= JSON.parse(kq);
      let date= new Date();
      var fullDate = date.getDate()+'-'+(date.getMonth()+1)+'-'+date.getFullYear();
      console.log(user)
      let orders={
        name:user.hoten,
        total:total,
        date: fullDate
      }
      this.order.postOrder(orders).subscribe(res=>{
        alert("Thanh Toán Thành Công");
        this.router.navigate(['client/home'])
       this.xoahet();
      });
    }else{
      alert("Vui Lòng Đăng Nhập Để Thanh Toán");
      this.router.navigate(['/client/login']);
    }
  }
  getProducts(){
    this.cart.getProducts().subscribe((res:any)=>{
      this.carts=res;
      this.cart.getTotalMoney().subscribe((res:any)=>{
        this.totalCart=res;
        });
    })
  }
  xoa(id:any){
    this.cart.removeProduct(id);
}
}