import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IntegrationService {

  public intergrationsPossibilities: Observable<any[]>;

  private integrations = [
    {
      service: 'post_nl',
      label: 'Post NL',
      url: 'post nl url'
    },
    {
      service: 'politie',
      label: 'Politie',
      url: 'politie url'
    },
    {
      service: 'kadester',
      label: 'Kadester',
      url: 'kadester url'
    }
  ];

  constructor() {

    this.intergrationsPossibilities = of(this.integrations);

  }

}
