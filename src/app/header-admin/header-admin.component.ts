import { Component, Input } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.scss']
})
export class HeaderAdminComponent {
  constructor(private router:Router){

  }
@Input() isAdmin:boolean=false;
logout(){
  localStorage.removeItem('admin');
  alert("Đăng Xuất Thành Công")
  this.router.navigate(['/loginAdmin']);
}
}
