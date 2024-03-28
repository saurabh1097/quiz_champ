import { Component, Inject, InjectionToken, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {  Router } from '@angular/router';


@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit{

lang:any
constructor(@Inject(MAT_DIALOG_DATA) private data:any,private matref:MatDialogRef<PopupComponent>,private router:Router) { }
  ngOnInit(): void {
    this.lang = this.data;
  }


confirm() {
  this.router.navigate(['/quiz'],{queryParams: {"selectedOption":this.lang.languageSelected}});
  this.matref.close()
}

}
