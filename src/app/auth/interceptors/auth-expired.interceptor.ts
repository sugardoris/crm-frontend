import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {Observable, tap} from 'rxjs';
import {LoginService} from "../login/login.service";
import {Router} from "@angular/router";

@Injectable()
export class AuthExpiredInterceptor implements HttpInterceptor {

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap(null, (err: HttpErrorResponse) => {
        if (err.status === 401) {
          this.loginService.logout();
          this.router.navigate(['/login']);
        }
      })
    );
  }
}
