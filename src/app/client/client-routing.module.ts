import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DangkiComponent } from './dangki/dangki.component';
import { HomeComponent } from './home/home.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login/login.component';
const routes: Routes = [
  {
    path:"",
    pathMatch:"full",
    redirectTo:"home"
  },
  {
    path:"login",
    component:LoginComponent,
  },
  {
    path:"dangki",
    component:DangkiComponent
  },
  {
    path:"home",
    component:HomeComponent,
  },
  {
    path:"detail/:id",
    component:DetailProductComponent
  },
  {
    path:"cart",
    component:CartComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
