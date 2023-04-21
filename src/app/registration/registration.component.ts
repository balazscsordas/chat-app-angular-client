import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs';
import { ErrorHandlerService } from 'src/app/services/error-handler/error-handler.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
})
export class RegistrationComponent {
  constructor(
    private auth: AuthService,
    private snackbar: SnackbarService,
    private http: HttpClient,
    private router: Router,
    private errorHandler: ErrorHandlerService
  ) {}

  registrationForm = new FormGroup({
    first_name: new FormControl<string | null>(null, Validators.required),
    last_name: new FormControl<string | null>(null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.minLength(6),
      Validators.required,
    ]),
  });

  handleSubmit() {
    if (
      Object.values(this.registrationForm.controls).some((control) =>
        control.hasError('required')
      )
    ) {
      this.snackbar.error('Both fields are required');
      return;
    }
    if (
      this.registrationForm.value.email &&
      this.registrationForm.controls.email.errors?.['email']
    ) {
      this.snackbar.error('Not valid e-mail address');
    }
    if (this.registrationForm.valid) {
      this.sendRegistrationCredentials(this.registrationForm);
      this.registrationForm.reset();
    }
  }

  private sendRegistrationCredentials(registrationForm: FormGroup) {
    this.http
      .post(
        environment.apiBaseURL + 'Auth/Registration',
        registrationForm.value
      )
      .pipe(catchError((error) => this.errorHandler.handleError(error)))
      .subscribe((res) => {
        this.router.navigateByUrl('login');
        this.snackbar.success('Registration was successful.');
      });
  }
}
