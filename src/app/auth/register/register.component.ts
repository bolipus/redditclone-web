import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { UserRegister } from '../../models/user-register';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup(
    {
       firstName: new FormControl('', [Validators.required]),
       lastName: new FormControl('', [Validators.required]),
       alias: new FormControl('', [Validators.required]),
       email: new FormControl('', [Validators.required]),
       password: new FormControl('', [Validators.required, Validators.minLength(5)]),
       confirmedPassword: new FormControl('', [Validators.required, Validators.minLength(5)])
    }
  );

  success = '';
  error ='';


  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  passwordMatch(): boolean {
    if (this.registerForm.value.password !== null || this.registerForm.value.password.length > 0){
      return this.registerForm.value.password === this.registerForm.value.confirmedPassword;
    }

    return false;
  }

  register(): void {

    const userRegister: UserRegister = {
      ...this.registerForm.value,
      enabled: true,
    };

    console.log(userRegister);

    this.userService.register(userRegister).subscribe(
      (user) => {
        this.success = 'User with email:' + user.email + ' was succesfully registred.';
      },
      (err: HttpErrorResponse) => {
       this.error = err.message;
      },
      () => {
        console.log('Completed');
      }

    );
  }

}
