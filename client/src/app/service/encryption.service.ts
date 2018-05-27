import { Injectable } from '@angular/core';

declare const cryptico: any;

@Injectable({
  providedIn: 'root'
})
export class EncryptionService {
  privateKey :string;

  publicKey :string;

  constructor() {
    const somePassphrase = 'The Moon is a Harsh Mistress.';
  }

  restoreKeys(passphrase: string) {
    this.privateKey = cryptico.generateRSAKey(passphrase, 512);
    this.publicKey = cryptico.publicKeyString(this.privateKey);
  }

  getPublicKey() :string {
    return this.publicKey;
  }

  getPrivateKey() :string {
    return this.privateKey;
  }

  encrypt(data :string, publicKey :string) {
    return cryptico.encrypt(data, publicKey);
  }

  decrypt(data :string, privateKey :string) {
    return cryptico.decrypt(data, privateKey);
  }

}
