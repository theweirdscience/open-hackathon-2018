import {
  MatInputModule,
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatGridListModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatOptionModule,
  MatListModule,
  MatSelectModule
} from '@angular/material';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProfileComponent } from './component/profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditDirective } from './directive/edit.directive';
import { SubscriptionComponent } from './component/subscription/subscription.component';
import { IntegrationComponent } from './component/integration/integration.component';
import { ButtonComponent } from './component/button/button.component';
import { EncryptionService } from './service/encryption.service';
import { IntegrationService } from './component/integration/integration.service';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    EditDirective,
    SubscriptionComponent,
    IntegrationComponent,
    ButtonComponent
  ],
  imports: [
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatOptionModule,
    MatGridListModule,
    MatSelectModule,
    MatToolbarModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    BrowserModule
  ],
  providers: [EncryptionService, IntegrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
