import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

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


  constructor() { }

  ngOnInit(): void {
  }

  passwordMatch(): boolean {
    if (this.registerForm.value.password !== null || this.registerForm.value.password.length > 0){
      return this.registerForm.value.password === this.registerForm.value.confirmedPassword;
    }

    return false;
  }



}
