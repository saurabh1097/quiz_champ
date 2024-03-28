import { Component, Inject, InjectionToken, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NavigationGuardService } from '../services/naigation-guard/navigation-guard.service';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
})
export class PopupComponent implements OnInit {
  lang: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private matref: MatDialogRef<PopupComponent>,
    private router: Router,
    private navigationService:NavigationGuardService
  ) {}
  ngOnInit(): void {
    this.lang = this.data;
  }

  confirm() {
    this.setNavigationHistory()
    this.router.navigate(['/quiz'], {
      queryParams: { selectedOption: this.lang.languageSelected },
    });
    this.matref.close();
  }


  setNavigationHistory(){
    this.navigationService.setCurrentPage("quiz");
    this.navigationService.setPreviousPage("options");
    console.log("current",this.navigationService.getCurrent()," previous ",this.navigationService.getPrevious());
  }
}
