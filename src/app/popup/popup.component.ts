import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-confirm-dialog',
  template: `
    <h1 mat-dialog-title>Confirmation</h1>
    <div mat-dialog-content>
      Are you sure you want to proceed?
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="dialogRef.close(false)">Cancel</button>
      <button mat-button (click)="dialogRef.close(true)">Proceed</button>
    </div>
  `,
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {
confirm() {
throw new Error('Method not implemented.');
}

constructor(public dialogRef: MatDialogRef<PopupComponent>) { }

}
