import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { environment } from '../../environments/environment.prod';
import { Observable } from 'rxjs';
import { ResponseToken } from '../models/response-token';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  user: User = null;

  redirectUrl = 'home';

  constructor(private httpClient: HttpClient) { }

  authenticate(email: string, password: string): Observable<ResponseToken> {

    return this.httpClient.post<ResponseToken>(environment.backendServerUrl + '/authenticate', {
      email,
      password
    });
  }

  getAuthenticatedUser(): Observable<User> {
    return this.httpClient.get<User>(environment.backendServerUrl + '/authenticatedUser');
  }

  setUser(user: User) {
    this.user = user;
  }

  getUser(): User {
    return this.user;
  }

  isAuthenticated(): boolean {
    return this.user !== null;
  }

  isAdmin(): boolean{

    for (const role of this.user.roles){
      if (role.name === 'ROLE_ADMIN') {
        return true;
      }
    }
    return false;
  }

  invalidateUser(): void{
    this.user = null;
  }

  getRedirectUrl(): string {
    return this.redirectUrl;
  }

  setRedirectUrl(url: string): void {
    this.redirectUrl = url;
  }

  clearRedirectUrl(): void {
    this.redirectUrl = null;
  }
}
