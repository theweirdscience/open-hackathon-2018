import { Component } from '@angular/core';
import { EncryptionService } from '../../service/encryption.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ProfileDialogComponent } from './profile-dialog.component';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent {

  firstname;
  lastname;
  address;
  date;

  constructor(
    private profileService: ProfileService,
    private rsa: EncryptionService,
    public dialog: MatDialog) {

    this.firstname = this.profileService.firstname;
    this.lastname = this.profileService.lastname;
    this.address = this.profileService.address;
    this.date = this.profileService.date;

  }

  openDialog(): void {
    this.dialog.open(ProfileDialogComponent, {
      width: '400px'
    });
  }

}
