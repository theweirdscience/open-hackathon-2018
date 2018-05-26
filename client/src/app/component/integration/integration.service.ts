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
