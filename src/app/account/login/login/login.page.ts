import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../../services/authentication.service'
import { AuthenticationRequest } from './../../param/AuthenticationRequest';
import { Router } from '@angular/router';
import { RegistrationRequest } from '../../param/RegistrationRequest';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  screen: any = 'signin';
  loginFormGroup: FormGroup = new FormGroup({
    login: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required])
  });
  registerFormGroup: FormGroup = new FormGroup({
    firstName: new FormControl("", [Validators.required]),
    lastName: new FormControl("", [Validators.required]),
    birthday: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
    phone: new FormControl("", [Validators.required]),
    login: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
    confirmPassword: new FormControl("", [Validators.required])
  });
  forgotPasswordFormGroup: FormGroup = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email])
  });
  isLoading: boolean = false;
  isToastOpen: boolean = false;
  toastMessage = "Bem vindo ao Secure Car Park";
  constructor(private authenticationService: AuthenticationService, private router: Router) {
  }

  ngOnInit() {
  }

  change(event: any) {
    this.screen = event;
  }
  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

  login() {
    var request: AuthenticationRequest = new AuthenticationRequest(this.loginFormGroup.get("login")?.value, this.loginFormGroup.get("password")?.value);

    if (this.loginFormGroup.valid) {
      this.authenticationService.userLogin(request).then(() => {
        if (this.authenticationService.isAuthenticated()) {
          this.authenticationService.redirectTo('/home');
        }
      }).catch((ex: any) => {
        this.toastMessage=ex;
        this.setOpen(true);
      });;
    }
  }

  register() {
    if (this.registerFormGroup.valid) {
      if (this.registerFormGroup.get("password")?.value != this.registerFormGroup.get("confirmPassword")?.value) {
        this.toastMessage = "A senha de confirmação não é igual a senha fornecida";
        this.setOpen(true);
        return;
      }

      var request: RegistrationRequest = new RegistrationRequest(this.registerFormGroup.get("firstName")?.value,
        this.registerFormGroup.get("lastName")?.value,
        this.registerFormGroup.get("birthday")?.value,
        this.registerFormGroup.get("email")?.value,
        this.registerFormGroup.get("phone")?.value,
        this.registerFormGroup.get("login")?.value,
        this.registerFormGroup.get("password")?.value);

      this.authenticationService.userRegister(request).then((data: any) => {
        this.toastMessage = "Usuário Criado com Sucesso";
        this.setOpen(true);
        this.screen = 'signin';
      }).catch((ex: any) => {
        console.error("Erro ao criar usuário:", ex);
      });
    }
  }

}