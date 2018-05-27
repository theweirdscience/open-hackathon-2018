import { Component, OnDestroy } from '@angular/core';
import { EncryptionService } from '../../service/encryption.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ProfileDialogComponent } from './profile-dialog.component';
import { ProfileService } from './profile.service';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent  {

  firstname;
  lastname;
  address;
  date;

  constructor(
    private http: HttpClient,
    private profileService: ProfileService,
    private rsa: EncryptionService,
    public dialog: MatDialog) {

    this.firstname = this.profileService.firstname;
    this.lastname = this.profileService.lastname;
    this.address = this.profileService.address;
    this.date = this.profileService.date;

  }

  public dispatchSMS() {

    return this.http.get('http://integrations.live.digital-identity-protocol.nl:12001/dip/send-message/B2BA2AA599E21A32B8152C37D45933DD')
      .subscribe();

  }

  openDialog(): void {
    this.dialog.open(ProfileDialogComponent, {
      width: '400px'
    });
  }

}
