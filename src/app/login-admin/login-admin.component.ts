import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
import {admin} from 'src/app/model/admin.model';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.scss']
})
export class LoginAdminComponent {

  adminLogin:admin = new admin()
  constructor(private verify:AdminService,private router:Router){

  }

  onSubmit(formLg:NgForm){
    if(formLg.invalid){
      alert("Vui Lòng Nhập Đầy Đủ Thông Tin");
    }else{
      this.verify.login().subscribe(res=>{
        let kq=  res.find((e:any)=>e.email==this.adminLogin.email && e.password==this.adminLogin.password)
        console.log(kq)
        if(kq){
          alert("Đăng Nhập Thành Công");
          localStorage.setItem('admin',JSON.stringify(res))
          this.adminLogin=new admin()
          this.router.navigate(['/admin/sanpham'])
        }else{
          alert("Email hoặc mật khẩu sai")
          this.adminLogin=new admin()
        }
      })
    }
  }
}
