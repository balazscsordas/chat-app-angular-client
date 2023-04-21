import { Component } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { SnackbarService } from '../services/snackbar/snackbar.service';
import { HttpClient } from '@angular/common/http';
import { ErrorHandlerService } from '../services/error-handler/error-handler.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  constructor(
    private auth: AuthService,
    private snackbar: SnackbarService,
    private http: HttpClient,
    private errorHandler: ErrorHandlerService,
    private cookieService: CookieService,
    private router: Router
  ) {}

  loading = false;
  loginForm = new FormGroup({
    email: new FormControl<string | null>(null, Validators.required),
    password: new FormControl<string | null>(null, [Validators.required]),
  });

  handleSubmit() {
    this.loading = true;
    if (
      this.loginForm.controls.email.errors?.['required'] ||
      this.loginForm.controls.password.errors?.['required']
    ) {
      this.snackbar.error('Both fields are required');
    }
    if (
      !this.loginForm.controls.email.errors &&
      !this.loginForm.controls.password.errors
    ) {
      this.sendLoginCredentials(this.loginForm);
      this.loginForm.reset();
    }
    this.loading = false;
  }

  testUserLogin() {
    this.loginForm.setValue({
      email: 'test@test.com',
      password: 'lacika1996',
    });
    this.sendLoginCredentials(this.loginForm);
    this.loginForm.reset();
  }

  private sendLoginCredentials(loginForm: FormGroup) {
    this.http
      .post<{ userToken: string }>(
        environment.apiBaseURL + 'Auth/Login',
        loginForm.value,
        {
          withCredentials: true,
        }
      )
      .pipe(catchError((error) => this.errorHandler.handleError(error)))
      .subscribe((res) => {
        this.cookieService.set(
          'User',
          res.userToken,
          1,
          undefined,
          undefined,
          true
        );
        this.auth.userToken = res.userToken;
        this.router.navigateByUrl('');
        this.snackbar.success('Successfully logged in.');
      });
  }
}
