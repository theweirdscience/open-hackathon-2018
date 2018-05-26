import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-integration',
  templateUrl: './integration.component.html'
})
export class IntegrationComponent {

  public integrations: any;

  constructor() {

    this.integrations = [
      {
        service: 'kpn',
      },
      {
        service: 'politie'
      },
      {
        service: 'Kadester'
      }
    ];

  }

}
