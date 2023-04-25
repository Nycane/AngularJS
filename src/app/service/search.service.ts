import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  search:any= new BehaviorSubject<any>("");

  constructor() { }
  
  getSearch(){
    return this.search
  }

  find(value:string){
    this.search.next(value)
  }
}
