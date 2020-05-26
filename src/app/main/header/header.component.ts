import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { Router } from '@angular/router';
import { User } from '../../models/user';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(private appService: AppService,  private router: Router) {}

  ngOnInit(): void {
  }

  logout(){
    sessionStorage.removeItem('token');
    this.appService.invalidateUser();
    this.router.navigate(['home']);
  }

  isAuthenticated(): boolean{
    return this.appService.isAuthenticated();
  }

  getUser(): User  {
    return this.appService.getUser();
  }

}
