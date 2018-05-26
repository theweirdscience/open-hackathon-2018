import { Injectable } from '@angular/core';
import RsaNode from 'rsa-node';

@Injectable({
  providedIn: 'root'
})
export class EncryptionService {

  private passPhrase: string;
  private rsaKey: string;
  private decrypt: string;

  constructor() {
    // this.passPhrase = 'The Moon is a Harsh Mistress.';
    // this.rsaKey = cryptico.generateRSAKey(this.passPhrase, 512);
    console.log(RsaNode);
  }

  public decryptMessage(url, payload) {
    // this.decrypt = cryptico.decrypt(payload, this.rsaKey);
  }

}
