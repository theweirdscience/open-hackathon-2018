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
import { SubscriptionComponent } from './component/subscription/subscription.component';
import { IntegrationComponent } from './component/integration/integration.component';
import { EncryptionService } from './service/encryption.service';
import { IntegrationService } from './component/integration/integration.service';
import { ProfileDialogComponent } from './component/profile/profile-dialog.component';
import { IntegrationDialogComponent } from './component/integration/integration-dialog.component';
import { ProfileService } from './component/profile/profile.service';
import { LocalStorage } from './service/localstorage.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ProfileDialogComponent,
    SubscriptionComponent,
    IntegrationDialogComponent,
    IntegrationComponent,
  ],
  imports: [
    HttpClientModule,
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
  providers: [EncryptionService, IntegrationService, ProfileService, LocalStorage],
  bootstrap: [AppComponent]
})
export class AppModule { }
