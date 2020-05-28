import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../models/user';
import { Role } from '../models/role';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const user: User = this.authenticationService.getUser();
    if (user === null) {
      return false;
    }
    console.log(user.roles);

    for (const role of user.roles){
      if (role.name === 'ROLE_ADMIN') {
        console.log('CanActivate:' + 'ROLE_ADMIN');
        return true;
      }
    }
    console.log('CanActivate:' + false)
    return false;
  }

}
