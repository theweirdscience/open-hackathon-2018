import { Component, Inject, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { IntegrationService } from './integration.service';
import { LocalStorage } from '../../service/localstorage.service';

@Component({
  templateUrl: 'integration-dialog.component.html'
})
export class IntegrationDialogComponent {

  public integrations;

  constructor(
    private localStorage: LocalStorage,
    private integrationService: IntegrationService,
    @Inject(MAT_DIALOG_DATA) public data: any) {

    this.integrations = this.integrationService.intergrationsPossibilities;

  }

  public setSelected(thingy, stuff) {

    if (stuff) {

      this.integrationService.selectedServices.push(thingy);

    } else {

      this.integrationService.selectedServices
        .forEach((otherstuff, index) => {

          if (thingy && otherstuff && otherstuff.label === thingy.label) {

            this.integrationService.selectedServices.splice(index, 1);

          }

        });

    }

    this.localStorage.updateDB(this.integrationService.selectedServices);

  }

  public updateSelected(thingy) {

    return this.integrationService.selectedServices.includes(thingy);

  }

}
