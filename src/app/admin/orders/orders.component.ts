import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orders:any=[];
  page:number=1;
  count:number=0;
  constructor(private admin :AdminService){}
  ngOnInit(): void {
    this.getOrders()
  }
  changePage(i:number){
    console.log(i)
    this.page=i
  }
  getOrders(){
    this.admin.getOrders().subscribe(res=>{
      this.count=res.length;
      this.orders=res
    })
  }
}
