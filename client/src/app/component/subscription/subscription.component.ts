import { Component } from '@angular/core';
import { IntegrationService } from '../integration/integration.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html'
})
export class SubscriptionComponent {

  chosenSelected: any;

  constructor(private integrationService: IntegrationService) {

    this.chosenSelected = this.integrationService.selectedServices;

  }

}
