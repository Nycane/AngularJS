import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,DoCheck{
  ngOnInit(): void {
  } 
  isAdmin:boolean=false
  ngDoCheck(): void{
this.auth();
  }
  auth(){
    localStorage.getItem('admin')?this.isAdmin=true:this.isAdmin=false;
  }
    
  
  title = 'doancuoiki';
}
