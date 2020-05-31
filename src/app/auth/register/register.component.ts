import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { UserRegister } from '../../models/user-register';


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
      id: 0,
      fullName:'',
      enabled: true,
      roles: [],
      firstName: this.registerForm.value.firstName,
      lastName: this.registerForm.value.lastName,
      alias: this.registerForm.value.alias,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
      confirmedPassword: this.registerForm.value.confirmedPassword
    };


    console.log(userRegister);

    this.userService.register(userRegister).subscribe(
      (user) => {
        console.log('User registred:' + user);
      },
      (err) => {
        console.log('Error:' +err);
      },
      () => {
        console.log('Completed');
      }

    );
  }

}
