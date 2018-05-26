import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IntegrationService {

  public intergrationsPossibilities: Observable<any[]>;

  private integrations = [
    {
      service: 'kpn',
      url: 'kpn url'
    },
    {
      service: 'politie',
      url: 'politie url'
    },
    {
      service: 'Kadester',
      url: 'kadester url'
    }
  ];

  constructor() {

    this.intergrationsPossibilities = of(this.integrations);

  }

}
