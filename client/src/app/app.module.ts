import {
  MatInputModule,
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatGridListModule,
  MatIconModule,
  MatSlideToggleModule,
  MatSliderModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatOptionModule,
  MatDialogModule,
  MatListModule,
  MatSelectModule,
  MatDialog
} from '@angular/material';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';
import { AppComponent } from './app.component';
import { ProfileComponent } from './component/profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditDirective } from './directive/edit.directive';
import { SubscriptionComponent } from './component/subscription/subscription.component';
import { IntegrationComponent } from './component/integration/integration.component';
import { ButtonComponent } from './component/button/button.component';
import { EncryptionService } from './service/encryption.service';
import { IntegrationService } from './component/integration/integration.service';
import { ProfileDialogComponent } from './component/profile/profile-dialog.component';
import { IntegrationDialogComponent } from './component/integration/integration-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    EditDirective,
    ProfileDialogComponent,
    SubscriptionComponent,
    IntegrationDialogComponent,
    IntegrationComponent,
    ButtonComponent
  ],
  imports: [
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatSliderModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatOptionModule,
    MatIconModule,
    MatGridListModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatToolbarModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    BrowserModule
  ],
  entryComponents: [ProfileDialogComponent, IntegrationDialogComponent],
  providers: [EncryptionService, IntegrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
