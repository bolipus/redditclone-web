import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { environment } from '../../environments/environment.prod';
import { Observable } from 'rxjs';
import { ResponseToken } from '../models/response-token';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  user: User = null;

  authUrl = environment.backendServerUrl + '/authenticate';
  authUserUrl = environment.backendServerUrl + '/authenticatedUser';

  constructor(private httpClient: HttpClient) { }

  authenticate(email: string, password: string): Observable<ResponseToken> {

    return this.httpClient.post<ResponseToken>(this.authUrl, {
      email,
      password
    });
  }

  getAuthenticatedUser(): Observable<User> {
    return this.httpClient.get<User>(this.authUserUrl);
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

  invalidateUser(){
    this.user = null;
  }
}
