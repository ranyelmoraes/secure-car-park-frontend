import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {apiBaseUrl} from '../../config.js';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<any[]>(`${apiBaseUrl}` + '/users');
  }
}
