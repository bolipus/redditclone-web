import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { ResponseToken } from '../../models/response-token';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup(
    {
       email: new FormControl('', [Validators.email, Validators.required]),
       password: new FormControl('', [Validators.required])
    }
  );

  success = '';
  error = '';

  constructor(private authenticationService: AuthenticationService,  private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    sessionStorage.setItem('token', '');
  }

  login(): void {
    this.error = '';
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    this.authenticationService.authenticate(email, password).subscribe(
    (data: ResponseToken) => {
      console.log('Token:' + data.token);
      sessionStorage.setItem('token', 'Bearer ' + data.token);
      sessionStorage.setItem('username', email);
      this.authenticationService.getAuthenticatedUser().subscribe(
          (user) => {
            console.log('user');
            if (user) {
              this.authenticationService.setUser(user);
              sessionStorage.setItem('user', JSON.stringify(user));
              if (this.authenticationService.getRedirectUrl()!=null){
                this.router.navigate([this.authenticationService.getRedirectUrl()]);
              } else {
                this.authenticationService.clearRedirectUrl();
                this.router.navigate(['home']);
              }
            } else {
              this.error = 'Authentication failed.';
              this.router.navigate(['login']);
            }
          },
          (err: HttpErrorResponse) => {
            this.error = err.message;
          }
      );
    },
    (error: HttpErrorResponse) => {
      this.error = error.message;
      this.router.navigate(['login']);
      },
      () => console.log('Auth Completed.')
    );

  }

}
