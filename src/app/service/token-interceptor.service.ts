import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { UserService } from './user.service';
import { AuthServiceService } from './auth-service.service';
import { catchError, Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(public auth: AuthServiceService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const re = '/api/auth'
    if (request.url.search(re)=== -1)
    {  
    console.log(request) ; 
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.auth.getToken()}` 
      }
    });
}
else 
{
  console.log(request) ; 
  request = request.clone({
    setHeaders: {
    }
  });

  
}
    return next.handle(request);
  }
}
