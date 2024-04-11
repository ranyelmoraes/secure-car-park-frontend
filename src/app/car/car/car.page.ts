import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CarRegistration } from 'src/app/account/param/CarRequest';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-car',
  templateUrl: './car.page.html',
  styleUrls: ['./car.page.scss'],
})
export class CarPage implements OnInit {

  private readonly API_BASE_URL = `${environment.API_BASE_URL}`;

  registerFormGroup: FormGroup = new FormGroup({
    year: new FormControl("", [Validators.required]),
    licensePlate: new FormControl("", [Validators.required]),
    model: new FormControl("", [Validators.required]),
    color: new FormControl("", [Validators.required, Validators.email]),
  });

  constructor(private router: Router, private authService: AuthenticationService, public http: HttpClient) { }

  ngOnInit() {
  }

  adicionarCarro() {
    var request: CarRegistration = new CarRegistration(
      this.registerFormGroup.get("year")?.value,
      this.registerFormGroup.get("licensePlate")?.value,
      this.registerFormGroup.get("model")?.value,
      this.registerFormGroup.get("color")?.value,
    )
    this.http.post(this.API_BASE_URL + '/cars', request).subscribe(data => {
      console.log(data);
      this.router.navigate(['/home']);
    }, error => {
      console.log(error);
    }); 
  }

}
