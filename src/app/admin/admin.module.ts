import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { AdminRoutingModule } from './admin-routing.module';
import { SanphamComponent } from './sanpham/sanpham.component';
import { OrdersComponent } from './orders/orders.component';



@NgModule({
  declarations: [
    SanphamComponent,
    OrdersComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule ,
    HttpClientModule,
    NgxPaginationModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
