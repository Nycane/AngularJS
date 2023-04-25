import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { user } from 'src/app/model/user.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
@Component({
  selector: 'app-dangki',
  templateUrl:'./dangki.component.html',
  styleUrls: ['./dangki.component.scss']
})
export class DangkiComponent implements OnInit {
  constructor(private http:HttpClient,private router:Router,private users:UserService){

  }
  kq:any;
  user:user=new user;
  ngOnInit(): void {
  }
    onSubmit(formDk:NgForm){
      console.log()
      if(formDk.invalid){
        alert("Vui Lòng Nhập Đầy Đủ Thông Tin")
         this.user=new user;
      }else{
        this.users.getUser().subscribe(res=>{
          const kq=res.findIndex((e:any)=>{
            return e.email===this.user.email;
           })
           console.log(kq);
           if(kq!=-1){
            alert("Tài Khoản Đã Tồn Tại");
           this.user=new user;
          }else{
            this.users.postUser(this.user).subscribe(res=>{
              alert("Đăng Ký Thành Công")
             this.user=new user;
              this.router.navigate(['/client/login']);
            })
          }
        })
      }
      // this.user=new user;
    }
}
