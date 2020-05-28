import { Component, OnInit } from '@angular/core';

import { faArrowUp} from '@fortawesome/free-solid-svg-icons';
import { faArrowDown} from '@fortawesome/free-solid-svg-icons';
import { faComments} from '@fortawesome/free-solid-svg-icons';
import { faUser} from '@fortawesome/free-solid-svg-icons';

import { LinkService } from '../../services/link.service';
import { Link } from '../../models/link';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  faComments = faComments;
  faUser = faUser;

  links: Link[];

  error: string;

  constructor(private linkService: LinkService, private authenticationService: AuthenticationService ) {

   }

  ngOnInit(): void {
    this.findAllLinks();
  }

  findAllLinks(){
    this.linkService.findAllLinks().subscribe(
      (links) => this.links = links,
      (error) => console.log(error)
    );
  }

  isAuthenticated(): boolean {
    return this.authenticationService.isAuthenticated();
  }

}
