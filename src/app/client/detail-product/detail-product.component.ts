import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { books } from 'src/app/model/books.model';
import { BooksService } from 'src/app/service/books.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss']
})
export class DetailProductComponent implements OnInit {
constructor(private route:ActivatedRoute,private book:BooksService,private cart:CartService){}
  ngOnInit(): void {
    this.getBooks()
    }
  bookDetail:any
  getBooks(){
    let id:any;
    id = this.route.snapshot.paramMap.get('id');
    console.log(id)
    this.book.getBookId(id).subscribe(res=>{
      console.log(res)
      this.bookDetail=res;
    })
  }
add(book:books){
  let product:any;
  product={
    "id":book.id,
    "name":book.name,
    "img":book.img,
   "price":book.price,
    "author":book.author,
    "quantity":1,
    "total":book.price
  }
  // product.total=product.price*product.quantity;
  this.cart.addProduct(product);
}

}
