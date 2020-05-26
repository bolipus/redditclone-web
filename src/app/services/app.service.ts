import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { environment } from '../../environments/environment.prod';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  user: User = null;

  authUrl = environment.backendServerUrl + '/login';


  constructor(private httpClient: HttpClient) { }

  authenticate(email: string, password: string): Observable<User> {

    return this.httpClient.post<User>(this.authUrl, {
      email,
      password
    });
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
