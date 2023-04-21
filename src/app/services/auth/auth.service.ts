import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router, private cookieService: CookieService) {}
  userToken: string | null = this.cookieService.get('User');

  signOut() {
    this.userToken = null;
    this.cookieService.delete('User');
    this.cookieService.delete('Profile');
    this.router.navigateByUrl('login');
  }
}
