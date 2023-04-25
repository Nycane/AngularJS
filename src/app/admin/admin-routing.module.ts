import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SanphamComponent } from './sanpham/sanpham.component';
import { OrdersComponent } from './orders/orders.component';
const routes: Routes = [
    
  {
    path:"",
    redirectTo:"sanpham",
    pathMatch:"full"
  },
  {
    path:"sanpham",
    component:SanphamComponent,

  },
  {
    path:"order",
    component:OrdersComponent,

  }
  
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
