import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { user } from 'src/app/model/user.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

      constructor(private users:UserService,private router:Router){

      }
      // @Output() login:EventEmitter<any> = new EventEmitter<any>();
  userLogin:user=new user;
  onSubmit(formLg:NgForm){
    this.users.getUser().subscribe(res=>{
      const kq=res.find((e:any)=>{
        if(e.email===this.userLogin.email && e.password===this.userLogin.password){
          return e;
        }
      })
      if(!kq){
        console.log(this.userLogin)
        alert("Tài Khoản Hoặc Mật Khẩu Sai");
        this.userLogin=new user;
      }else{
        alert("Đăng Nhập Thành Công");
        // this.login.emit(true);
        this.router.navigate(['/client/home']);
        localStorage.setItem('user',JSON.stringify(kq));
        this.userLogin=new user;
      }
    })
  }
}
