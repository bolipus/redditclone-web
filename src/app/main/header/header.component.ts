import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { AuthenticationService } from '../../services/authentication.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(private authenticationService: AuthenticationService,  private router: Router) {}

  ngOnInit(): void {
  }

  logout(){
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
    this.authenticationService.invalidateUser();
    this.router.navigate(['home']);
  }

  isAuthenticated(): boolean{
    return this.authenticationService.isAuthenticated();
  }

  isAdmin(): boolean {
    return this.authenticationService.isAdmin();
  }

  getUser(): User  {
    return this.authenticationService.getUser();
  }

}
