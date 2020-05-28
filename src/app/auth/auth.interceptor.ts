import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  }
)
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('Interceptor' );
    if (sessionStorage.getItem('username') && sessionStorage.getItem('token')){
      console.log('Interceptor Authenticated' );
      console.log('Username:' +  sessionStorage.getItem('username'));
      console.log('Token' +  sessionStorage.getItem('token'));
      request = request.clone(
        {
          setHeaders: {
            Authorization: sessionStorage.getItem('token')
          }
        }
      );
    }

    return next.handle(request);
  }
}
