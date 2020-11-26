import { Component, OnInit } from '@angular/core';
import {POSTS} from '../data/mock-data';
import {Post} from '../data/Post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  constructor() { }

  posts = POSTS;
  selectedPost: Post;

  ngOnInit(): void {
  }


  onSelect(post: Post): void {
    this.selectedPost = post;
  }
}
