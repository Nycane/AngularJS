import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ClientRoutingModule } from './client-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DangkiComponent } from './dangki/dangki.component';
import { LoginComponent } from './login/login/login.component';

@NgModule({
  declarations: [
    HomeComponent,
    DetailProductComponent,
    CartComponent,
    ProductsComponent,
    DangkiComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    FormsModule ,
    NgxPaginationModule,
    NgbModule 
  ],
})
export class ClientModule { }
