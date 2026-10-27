import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MsalModule, MsalService } from '@azure/msal-angular';
import {
  BrowserCacheLocation,
  InteractionType,
  PublicClientApplication
} from '@azure/msal-browser';
import { AuthComponent } from './auth.component';

const msalInstance = new PublicClientApplication({
  auth: {
    clientId: 'a3023b3d-9749-40fe-aef2-7a3dd59eaf40',
    authority: 'https://login.microsoftonline.com/338d9c44-df6c-4fe3-ba46-e0d9e80fc0f0',
    redirectUri: window.location.origin
  },
  cache: {
    cacheLocation: BrowserCacheLocation.SessionStorage
  }
});

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: AuthComponent }]),
    MsalModule.forRoot(
      msalInstance,
      { interactionType: InteractionType.Popup },
      {
        interactionType: InteractionType.Popup,
        protectedResourceMap: new Map<string, string[] | null>()
      }
    )
  ],
  providers: [MsalService]
})
export class AuthModule {}
