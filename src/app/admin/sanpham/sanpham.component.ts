import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal,ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AdminService } from 'src/app/service/admin.service';
import {books} from 'src/app/model/books.model';
@Component({
  selector: 'app-sanpham',
  templateUrl:'./sanpham.component.html',
  styleUrls: ['./sanpham.component.scss']
})
export class SanphamComponent implements OnInit,AfterViewInit{
  page:number=1;
  count:number=0;
  closeResult: string = '';
  products:any=[];
  book:books=new books();
  isAdd:boolean=false
  displayStyle= "none";
constructor(private admin : AdminService,private modalService: NgbModal){
  
}
  openPopup() {
    this.isAdd=true
    this.book=new books();
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }
ngAfterViewInit() {
  let inputElement = document.querySelector('input[type="file"]') as HTMLInputElement
  let imgFile=document.querySelector('#imgFile');
  console.log(inputElement)
}
ngOnInit(): void {
  this.getProducts()
  }
// open(content:any) {
//   this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
//     this.closeResult = `Closed with: ${result}`;
//   }, (reason) => {
//     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
//   });
// } 
// private getDismissReason(reason: any): string {
//   if (reason === ModalDismissReasons.ESC) {
//     return 'by pressing ESC';
//   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
//     return 'by clicking on a backdrop';
//   } else {
//     return  `with: ${reason}`;
//   }
// }
getProducts(){
  this.admin.getProducts().subscribe(res=>{
    console.log(res)
    console.log(this.products)
    this.products=res;
    this.count=res.length
  })
}
deleteId(id:number){
  console.log(id)
  this.admin.deleteBook(id).subscribe(res=>{
    res?alert("Xóa Thành Công"):"";
    this.getProducts();
  })
}
update(e:books){
  this.openPopup()
  this.isAdd=false
  this.book=e;
}
onSubmit(formProduct:NgForm){
    if(formProduct.invalid){
      alert("Vui Lòng Nhập Đầy Đủ Thông Tin")
      console.log(formProduct.value)
    }else{
          if(this.isAdd){
            this.book.img=this.book.img.split('\\').pop();
            this.admin.postProduct(this.book).subscribe(res=>{
             this.getProducts()
             alert("Thêm Thành Công")
             console.log(this.book)
             this.book=new books()
         })
          }else{
            this.book.img=this.book.img.split('\\').pop();
            console.log(this.book)
            this.admin.updateBook(this.book.id,this.book).subscribe(res=>{
              if(res){
                alert("Cập Nhật Thành Công");
                this.book = new books()
              }
            })
          }
    }
}
changePage(i:number){
  console.log(i)
  this.page=i
}
}
