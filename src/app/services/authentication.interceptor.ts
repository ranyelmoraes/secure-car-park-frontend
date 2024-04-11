import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor(private authenticationService: AuthenticationService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("Auth Interceptor");
    
    // Verifica se a requisição é para o endpoint '/users'
    if (request.url.endsWith('/users')) {
      return next.handle(request); // Permite a requisição sem adicionar o token de autenticação
    }

    // Adiciona o token de autenticação às requisições para outros endpoints
    if (this.authenticationService.isAuthenticated()) {
      request = request.clone({
        setHeaders: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, DELETE, PUT',
          'Authorization': `Bearer ${this.authenticationService.token}`
        },
      });
    } else {
      request = request.clone({
        setHeaders: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, DELETE, PUT'
        },
      });
    }

    return next.handle(request);
  }
}

export const AuthenticationInterceptorProvider = {provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi: true}
