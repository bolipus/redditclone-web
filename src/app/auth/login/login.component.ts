import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AppService } from '../../services/app.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

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
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    this.appService.authenticate(email, password).subscribe(
      (user) => {
        this.appService.setUser(user);
        if (user) {
          sessionStorage.setItem(
            'token',
            btoa(email + ':' + password)
          );
          this.router.navigate(['home']);
        } else {
          this.error = 'Authentication failed.';
        }


      },
      (error: HttpErrorResponse) => {
        this.error = error.error;
      }
    )
  }

}
