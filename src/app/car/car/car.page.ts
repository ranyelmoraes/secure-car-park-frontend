import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CarRegistration } from 'src/app/account/param/CarRequest';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { apiBaseUrl} from "../../../config.js";

@Component({
  selector: 'app-car',
  templateUrl: './car.page.html',
  styleUrls: ['./car.page.scss'],
})
export class CarPage implements OnInit {

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
    var request: CarRegistration = new CarRegistration(this.registerFormGroup.get("year")?.value,
      this.registerFormGroup.get("licensePlate")?.value,
      this.registerFormGroup.get("birthday")?.value,
      this.registerFormGroup.get("model")?.value,
      this.registerFormGroup.get("color")?.value,
    )
    this.http.post(`${apiBaseUrl}/cars`, request).subscribe(data => {
      console.log(data);
      this.router.navigate(['/home']);
    }, error => {
      console.log(error);
    }); 
  }

}
