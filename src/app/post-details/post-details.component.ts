import { Component, OnInit, Input } from '@angular/core';

import {Post} from '../data/Post';


@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  @Input() post: Post;
  constructor() { }

  ngOnInit(): void {
  }

}
