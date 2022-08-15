import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../service/login.service';
import { Router } from '@angular/router';
import { JwtToken } from '../../domain/jwt-token';
import { UserService } from '../../service/user.service';
import { UserCredentials } from '../../domain/user-credentials';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loading: boolean = false;
  loginError: boolean = false;

  loginFormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(
    private loginService: LoginService,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {}

  login(): void {
    let userCredentials: UserCredentials = {
      username: this.loginFormGroup.value.username,
      password: this.loginFormGroup.value.password,
    };

    this.loginService
      .authenticate(userCredentials)
      .subscribe(
        (jwtToken: JwtToken) => this.successfulLogin(jwtToken),
        () => (this.loginError = true)
      )
      .add(() => (this.loading = false));
  }

  successfulLogin(jwtToken: JwtToken): void {
    localStorage.setItem('token', jwtToken.token);
    this.userService.setCurrentUser();
    this.router.navigate(['/']);
  }
}
