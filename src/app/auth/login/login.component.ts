import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AppService } from '../../services/app.service';
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
       email: new FormControl(''),
       password: new FormControl('')
    }
  );

  success = '';
  error = '';

  constructor(private appService: AppService,  private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    sessionStorage.setItem('token', '');
  }

  login(): void {
    this.error = '';
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    this.appService.authenticate(email, password).subscribe(
    (data: ResponseToken) => {
      console.log('Token:' + data.token);
      sessionStorage.setItem('token', data.token);
      this.appService.getAuthenticatedUser().subscribe(
          (user) => {
            console.log('user');
            if (user) {
              this.appService.setUser(user);
              this.router.navigate(['home']);
            } else {
              this.error = 'Authentication failed.';
            }
          }
      );
    },
    (error: HttpErrorResponse) => {
        this.error = error.error;
      },
      () => console.log('Auth Completed.')
    )

  }

}
