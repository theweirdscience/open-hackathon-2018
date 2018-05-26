import { Component, OnInit } from '@angular/core';
import { IntegrationService } from './integration.service';

@Component({
  selector: 'app-integration',
  templateUrl: './integration.component.html'
})
export class IntegrationComponent {

  public integrations: any;

  constructor(private integrationService: IntegrationService) {

    this.integrations = this.integrationService.intergrationsPossibilities;

  }

}
