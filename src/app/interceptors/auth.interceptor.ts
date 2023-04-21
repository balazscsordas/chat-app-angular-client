import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpEventType,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';
import { ProgressbarService } from '../services/progressbar/progressbar.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private auth: AuthService,
    private progressbar: ProgressbarService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.progressbar.show();
    const userToken = this.auth.userToken;
    const authReq = request.clone({
      setHeaders: { Authorization: `Bearer ${userToken}` },
    });
    return next.handle(authReq).pipe(
      tap(
        (event) => {
          if (event.type === HttpEventType.Response) {
            this.progressbar.hide();
          }
        },
        (error) => {
          this.progressbar.hide();
        }
      )
    );
  }
}
