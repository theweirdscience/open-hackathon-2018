import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { ProfileService } from './profile.service';

@Component({
  templateUrl: 'profile-dialog.component.html'
})
export class ProfileDialogComponent {

  firstname;
  lastname;
  address;
  date;

  constructor(
    private profileService: ProfileService,
    @Inject(MAT_DIALOG_DATA) public data: any) {

    this.firstname = this.profileService.firstname;
    this.lastname = this.profileService.lastname;
    this.address = this.profileService.address;
    this.date = this.profileService.date;

  }

  setNewValue(value) {

    console.log('val', value);

  }

}
