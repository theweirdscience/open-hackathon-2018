import { Component, Inject } from '@angular/core';
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

}
