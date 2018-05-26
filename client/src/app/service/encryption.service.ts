import { Injectable } from '@angular/core';

declare const cryptico: any;

@Injectable({
  providedIn: 'root'
})
export class EncryptionService {

  constructor() {

    const somePassphrase = 'The Moon is a Harsh Mistress.';

    const privateKey = cryptico.generateRSAKey(somePassphrase, 512);

    const publicKey = cryptico.publicKeyString(privateKey);

    console.log(publicKey)

  }

}
