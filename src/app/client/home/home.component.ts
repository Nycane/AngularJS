import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { books } from 'src/app/model/books.model';
import { BooksService } from 'src/app/service/books.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
//   ListBooks:any;

//   constructor(private router: Router,private route: ActivatedRoute,private book:BooksService){
//   }
ngOnInit(): void {
//  this.getListBooks();
}
// getListBooks(){
//   this.book.getBooks().subscribe(res=>{
//     this.ListBooks=res;
//    })
// }


}
