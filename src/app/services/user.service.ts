import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly API_BASE_URL = `${environment.API_BASE_URL}`;

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<any[]>(this.API_BASE_URL + '/users');
  }
}
