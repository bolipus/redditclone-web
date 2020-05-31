import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { UserRegister } from '../models/user-register';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }


  register(userRegister: UserRegister): Observable<User> {
    return this.httpClient.post<User>(environment.backendServerUrl + '/api/v1/users/register',  userRegister);
  }

  getUser(userId: number): Observable<User> {
    return this.httpClient.get<User>(environment.backendServerUrl + + '/api/v1/users/' + userId);
  }

  getAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(environment.backendServerUrl +  '/api/v1/users');
  }

  deleteUser(userId: number): Observable<void> {
    return this.httpClient.delete<void>(environment.backendServerUrl + + '/api/v1/users/' + userId);
  }

  updateUser(user: User): Observable<User> {
    return this.httpClient.put<User>(environment.backendServerUrl + + '/api/v1/users/' + user.id, {
      user
    });
  }
}
