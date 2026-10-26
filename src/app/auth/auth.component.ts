import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

type AuthMode = 'login' | 'signup';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  readonly mode: AuthMode;
  readonly form;
  submitted = false;

  constructor(private formBuilder: FormBuilder, route: ActivatedRoute) {
    this.mode = route.snapshot.data['mode'] as AuthMode;
    const isSignup = this.mode === 'signup';

    this.form = this.formBuilder.group({
      name: ['', isSignup ? [Validators.required, Validators.maxLength(100)] : []],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', isSignup ? [Validators.required] : []]
    }, {
      validators: isSignup ? this.passwordsMatch : []
    });
  }

  get isSignup(): boolean {
    return this.mode === 'signup';
  }

  get formMessage(): string {
    return this.isSignup
      ? 'Your details are valid. Account creation is not connected yet.'
      : 'Your details are valid. Sign-in is not connected yet.';
  }

  submit(): void {
    this.submitted = true;
    this.form.markAllAsTouched();
  }

  hasError(controlName: string, errorName: string): boolean {
    const control = this.form.get(controlName);
    return !!control && control.hasError(errorName) && (control.touched || this.submitted);
  }

  private passwordsMatch(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordsMismatch: true };
  }
}
