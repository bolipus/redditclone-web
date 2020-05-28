import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RedditCloneWeb';

  constructor(private authenticationService: AuthenticationService) {
    const user: User = JSON.parse(sessionStorage.getItem('user'));
    if (user!=null){
      authenticationService.setUser(user);
    }

  }
}
