import { Component, OnInit } from '@angular/core';

import { faArrowUp} from '@fortawesome/free-solid-svg-icons';
import { faArrowDown} from '@fortawesome/free-solid-svg-icons';
import { faComments} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  faComments = faComments;

  constructor() { }

  ngOnInit(): void {
  }

}
