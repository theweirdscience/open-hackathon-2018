import { Injectable } from '@angular/core';
import { Observable, of, from, BehaviorSubject, Subject } from 'rxjs';
import { tap, map, scan } from 'rxjs/operators';
import { LocalStorage } from '../../service/localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class IntegrationService {

  public intergrationsPossibilities: Observable<any[]>;
  selectedServices;

  private integrations = [
    {
      service: 'post_nl',
      label: 'Post NL',
      image: 'https://seeklogo.com/images/P/postnl-logo-4DA6C08E55-seeklogo.com.png',
      url: 'post nl url'
    },
    {
      service: 'politie',
      label: 'Politie',
      image: 'http://gtalogo.com/img/8379.png',
      url: 'politie url'
    },
    {
      service: 'KPN',
      label: 'KPN',
      image: 'https://www.consumentenbond.nl/binaries/content/gallery/cbhippowebsite/tests/alles-in-1/afbeeldingen-oud/kpn-logo.jpg/kpn-logo.jpg/cbhippowebsite%3Aplcl',
      url: 'KPN url'
    }
  ];

  constructor(private localStorage: LocalStorage) {

    this.intergrationsPossibilities = of(this.integrations);

    this.selectedServices = this.localStorage.getDB() || [];

  }

}
