import { Component, OnInit, Inject } from '@angular/core';
import { IntegrationService } from './integration.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { IntegrationDialogComponent } from './integration-dialog.component';

@Component({
  selector: 'app-integration',
  templateUrl: './integration.component.html'
})
export class IntegrationComponent {

  public integrations: any;

  constructor(public dialog: MatDialog) {

  }

  openDialog(): void {
    this.dialog.open(IntegrationDialogComponent, {
      width: '400px',
      data: { name: 'some name', animal: 'tiger' }
    });
  }

}
