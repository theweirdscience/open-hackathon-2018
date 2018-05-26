import { Component } from '@angular/core';
import { EncryptionService } from '../../service/encryption.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent {

  constructor(private rsa: EncryptionService) {

  }

}
