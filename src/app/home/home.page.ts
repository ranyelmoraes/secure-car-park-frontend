import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  data: any;
  carData: any;
  logged: boolean;
  private readonly API_BASE_URL = `${environment.API_BASE_URL}`;
  constructor(public http: HttpClient, private router: Router, private authService: AuthenticationService) {
    this.logged = false;
    this.getData();
    if (authService.isAuthenticated()) {
      this.logged = true;
      this.checkAndLoadCars();
    }
  }

  ionViewWillEnter() {
    this.getData();
    this.checkAuthentication();
  }

  redirectToLogin() {
    console.log("Redirecionado pra Login");
    this.router.navigate(['/login']);
  }

  redirectToCreateUser() {
    this.router.navigate(['/login']);
  }

  redirectToCreateCar() {
    this.router.navigate(['/car']);
  }
  getData() {
    this.http.get(this.API_BASE_URL+'/users').subscribe(data => {
      console.log(data);
      this.data = data;
    }, e => {
      console.log(e);
    });
  }

  getCars() {
    this.http.get(this.API_BASE_URL+'/cars').subscribe(data => {
      console.log(data);
      this.carData = data;
    }, e => {
      console.log(e);
    });
  }

  checkAndLoadCars() {
    if (this.authService.isAuthenticated()) {
      this.getCars();
    }
  }

  getObjectKeys(obj: any): string[] {
    return Object.keys(obj);
  }

  private checkAuthentication(): void {
    if (this.authService.isAuthenticated()) {
      this.logged = true;
      this.checkAndLoadCars();
    }
  }


}
