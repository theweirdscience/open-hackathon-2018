import { Component } from '@angular/core';
import { EncryptionService } from '../../service/encryption.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ProfileDialogComponent } from './profile-dialog.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent {

  constructor(
    private rsa: EncryptionService,
    public dialog: MatDialog) {
  }

  openDialog(): void {
    this.dialog.open(ProfileDialogComponent, {
      width: '400px',
      data: { name: 'some name', animal: 'tiger' }
    });
  }

}
