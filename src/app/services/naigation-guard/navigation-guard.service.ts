import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationGuardService {

  currentPage:string=""
  previousPage:string=""

  constructor() { }

  setCurrentPage(current:string){
    this.currentPage=current;
  }

  setPreviousPage(previous:string){
    this.previousPage=previous;
  }

  getCurrent():string{
    return this.currentPage;
  }

  getPrevious():string{
    return this.previousPage;
  }
}
