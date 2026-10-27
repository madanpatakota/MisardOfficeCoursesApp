import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ValidationErrors,
  Validators
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MsalService } from '@azure/msal-angular';
import { InteractionRequiredAuthError } from '@azure/msal-browser';
import { firstValueFrom } from 'rxjs';

type AuthMode = 'login' | 'signup';

const API_SCOPE =
  'api://a3023b3d-9749-40fe-aef2-7a3dd59eaf40/access_as_user';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  readonly mode: AuthMode;
  readonly form;
  submitted = false;
  loading = false;
  statusMessage = '';

  // Kept in memory only. Use it when calling your API.
  private accessToken = '';

  constructor(
    private formBuilder: FormBuilder,
    route: ActivatedRoute,
    private msalService: MsalService
  ) {
    this.mode = route.snapshot.data['mode'] as AuthMode;
    const isSignup = this.mode === 'signup';

    this.form = this.formBuilder.group(
      {
        name: [
          '',
          isSignup ? [Validators.required, Validators.maxLength(100)] : []
        ],
        email: ['', [Validators.required, Validators.email]],
        // Entra handles the sign-in password in its popup.
        password: [
          '',
          isSignup ? [Validators.required, Validators.minLength(8)] : []
        ],
        confirmPassword: [
          '',
          isSignup ? [Validators.required] : []
        ]
      },
      {
        validators: isSignup ? this.passwordsMatch : []
      }
    );
  }

  get isSignup(): boolean {
    return this.mode === 'signup';
  }

  async submit(): Promise<void> {
    this.submitted = true;
    this.form.markAllAsTouched();
    this.statusMessage = '';

    // Your current Azure app is organization-only and has no self-signup flow.
    if (this.isSignup) {
      this.statusMessage =
        'Self-service signup is not enabled in the current Azure setup.';
      return;
    }

    if (this.form.get('email')?.invalid) {
      return;
    }

    this.loading = true;

    try {
      const email = this.form.get('email')?.value ;

      const loginResult = await firstValueFrom(
        this.msalService.loginPopup({
          scopes: ['openid', 'profile'],
          loginHint: email ?? undefined
        })
      );

      if (!loginResult.account) {
        throw new Error('Microsoft sign-in did not return an account.');
      }

      this.msalService.instance.setActiveAccount(loginResult.account);

      let tokenResult;

      try {
        tokenResult = await firstValueFrom(
          this.msalService.acquireTokenSilent({
            account: loginResult.account,
            scopes: [API_SCOPE]
          })
        );
      } catch (error) {
        if (!(error instanceof InteractionRequiredAuthError)) {
          throw error;
        }

        tokenResult = await firstValueFrom(
          this.msalService.acquireTokenPopup({
            account: loginResult.account,
            scopes: [API_SCOPE]
          })
        );
      }

      this.accessToken = tokenResult.accessToken;
      this.statusMessage = 'Sign-in succeeded. API access token received.';
    } catch (error) {
      console.error('Microsoft sign-in failed:', error);
      this.statusMessage =
        'Sign-in failed. Check the Azure app and API scope configuration.';
    } finally {
      this.loading = false;
    }
  }

  hasError(controlName: string, errorName: string): boolean {
    const control = this.form.get(controlName);
    return !!control &&
      control.hasError(errorName) &&
      (control.touched || this.submitted);
  }

  private passwordsMatch(
    control: AbstractControl
  ): ValidationErrors | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    return password === confirmPassword
      ? null
      : { passwordsMismatch: true };
  }
}