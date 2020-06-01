import { Component, OnInit } from '@angular/core';
import { LinkService } from '../../services/link.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Link } from '../../models/link';

@Component({
  selector: 'app-submit-link',
  templateUrl: './submit-link.component.html',
  styleUrls: ['./submit-link.component.css']
})
export class SubmitLinkComponent implements OnInit {

  constructor(private linkService: LinkService) { }


  linkForm = new FormGroup(
    {
      title: new FormControl('', [Validators.required]),
      url: new FormControl('', Validators.required)
    }
  );

  error = '';

  ngOnInit(): void {
  }

  addLink(): void {
    const addLink: Link = {
      ...this.linkForm.value
    };

    console.log(addLink);

    this.linkService.addLink(addLink).subscribe(
      (link: Link) => {
        console.log(link);
      },
      (err) =>  this.error = err,
      () => console.log('Completed')
    );
  }

  reset(): void {
    this.linkForm.reset();
  }

}
