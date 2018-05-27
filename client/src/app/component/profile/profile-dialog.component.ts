import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  templateUrl: 'profile-dialog.component.html'
})
export class ProfileDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  setNewValue(value) {

    console.log('val', value);

  }

}
