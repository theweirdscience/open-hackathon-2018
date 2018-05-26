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
      image: 'https://seeklogo.com/images/P/Politie-logo-269952DA5A-seeklogo.com.png',
      url: 'politie url'
    },
    {
      service: 'kadester',
      label: 'Kadester',
      image: 'https://yt3.ggpht.com/a-/AJLlDp1aFV3E5R1dHen8Vph5n47AZc8Ujl5hglhF0Q=s900-mo-c-c0xffffffff-rj-k-no',
      url: 'kadester url'
    }
  ];

  constructor() {

    this.intergrationsPossibilities = of(this.integrations);

  }

}
