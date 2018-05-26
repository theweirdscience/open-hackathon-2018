import { Component, Inject, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { IntegrationService } from './integration.service';

@Component({
  templateUrl: 'integration-dialog.component.html'
})
export class IntegrationDialogComponent {

  public integrations;

  constructor(
    private integrationService: IntegrationService,
    @Inject(MAT_DIALOG_DATA) public data: any) {

    this.integrations = this.integrationService.intergrationsPossibilities;

  }

  public setSelected(thingy, stuff) {

    if (stuff) {

      this.integrationService.selectedServices.push(thingy);
      console.log(this.integrationService.selectedServices);

    } else {

      this.integrationService.selectedServices = this.integrationService.selectedServices
        .filter((otherstuff) => otherstuff.label !== thingy.label)
        .map((x) => {
          console.log(x);
          return x;
        });

    }

  }

}
