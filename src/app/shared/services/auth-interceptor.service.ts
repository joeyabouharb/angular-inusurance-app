import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { UserService } from './user.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  const reqHeader = req.clone({
    headers: req.headers.set(
      'Authorization', `Bearer ${this.user.getToken()}`
      )
    });
  return next.handle(reqHeader);
  }
  constructor(private user: UserService) { }
}
