import {Component, OnInit} from '@angular/core';
import {Post} from '../data/Post';
import { POSTS } from '../data/mock-data';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  post: Post = POSTS[0];

  testData = 'preved';

  constructor() {
  }

  ngOnInit(): void {
  }

}
