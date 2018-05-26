import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  templateUrl: 'profile-dialog.component.html'
})
export class ProfileDialogComponent {

  constructor(
    public dialogRef: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any) {

  }

  onNoClick(): void {

    this.dialogRef.close();

  }

}
