import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from 'src/app/service/books.service';
import { SearchService } from 'src/app/service/search.service';
import  { books } from "src/app/model/books.model";    
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
  ListBooks:any;
  page:number=1;
  count:number=0;
  constructor(private router: Router,private route: ActivatedRoute,private book:BooksService,private find:SearchService){
  }
  
  changePage(i:number){
    console.log(i)
    this.page=i
  }
ngOnInit(): void {
 this.getListBooks();
}
getListBooks(){
  this.book.getBooks().subscribe(res=>{
    this.find.getSearch().subscribe((e:any)=>{
      if(e!=""){
        this.ListBooks=res.filter((product:any)=>product.name.toLowerCase().startsWith(e.toLowerCase()))
        this.page=1
        this.count=this.ListBooks.length;
      }else{
        console.log(res)
        this.ListBooks=res;
        this.count=this.ListBooks.length;
      }
    })
   })
}
}
