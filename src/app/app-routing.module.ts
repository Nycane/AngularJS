import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './guard/admin.guard';
import { UserGuard } from './guard/user.guard';
import { LoginAdminComponent } from './login-admin/login-admin.component';
const routes: Routes = [
  {
    path:"",
    redirectTo:"client",
    pathMatch:"full"
  },
  {
    path:"client",
    loadChildren:()=>import('./client/client.module').then(m=>m.ClientModule),
    canLoad: [UserGuard]
  },
  {
    path:"admin",
    loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule),
    canLoad: [AdminGuard]

  },
  {
    path:"loginAdmin",
    component:LoginAdminComponent,

  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
