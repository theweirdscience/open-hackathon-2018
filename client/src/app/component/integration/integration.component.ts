import { Component, OnInit, Inject, AfterViewChecked, OnChanges } from '@angular/core';
import { IntegrationService } from './integration.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { IntegrationDialogComponent } from './integration-dialog.component';

@Component({
  selector: 'app-integration',
  templateUrl: './integration.component.html'
})
export class IntegrationComponent {

  chosenSelected: any;

  constructor(
    private integrationService: IntegrationService,
    public dialog: MatDialog) {

    this.chosenSelected = this.integrationService.selectedServices;

  }

  openDialog(): void {
    this.dialog.open(IntegrationDialogComponent, {
      width: '400px',
      data: { name: 'some name', animal: 'tiger' }
    });
  }

}
