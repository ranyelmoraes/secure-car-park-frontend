import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { AuthenticationRequest } from 'src/app/account/param/AuthenticationRequest';
import { JwtHelperService } from "@auth0/angular-jwt";
import { RegistrationRequest } from '../account/param/RegistrationRequest';
import { apiBaseUrl } from "../../config.js";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  isUserLoggedIn = false;
  constructor(private http: HttpClient, private router: Router, public jwtHelper: JwtHelperService) { }

  userLogin(request: AuthenticationRequest) {
    return this.http.post(`${apiBaseUrl}` + 'api/signin', request)
      .toPromise().then((response: any) => {
        if (response?.token != null) {
          localStorage.setItem("sb_s_token", response?.token);
        }
      }).catch(this.handleError);
  }


  get token() {
    let token: any = localStorage.getItem("sb_s_token");
    return token;
  }
  get login() {
    let tokenDecoded = this.jwtHelper.decodeToken(this.token);
    return tokenDecoded.sub;
  }
  public isAuthenticated(): boolean {
    if (this.token != null && this.jwtHelper.isTokenExpired(this.token)) {
      let token: any = localStorage.getItem("sb_s_refresh");
      localStorage.setItem("sb_s_token", token);
    }

    this.isUserLoggedIn = !this.jwtHelper.isTokenExpired(this.token);
    return this.isUserLoggedIn;
  }

  redirectTo(uri: string) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.router.navigate([uri]));
  }

  userRegister(request: RegistrationRequest): Promise<any> {
    return this.http.post<any>(`${this.API_URL}/users`, request)
      .toPromise().then((response: any) => {
        return response?.Data;
      }).catch((e) => {
        this.handleError;
        console.log(e.error);
      });
  }

  private handleError(exception: HttpErrorResponse): Promise<any> {
    console.error(`Service Exception: ${exception.message}`);
    return Promise.reject(`${exception.error?.errorCode} - ${exception.error?.message}`);
  }
}