import { Injectable } from '@angular/core';
import { Observable, of, from, BehaviorSubject, Subject } from 'rxjs';
import { tap, map, scan } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IntegrationService {

  public intergrationsPossibilities: Observable<any[]>;
  selectedServices: any = [];

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
    }
  ];

  constructor() {

    this.intergrationsPossibilities = of(this.integrations);

  }

}
