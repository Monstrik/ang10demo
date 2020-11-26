import {Component, OnInit} from '@angular/core';
import {Post} from '../data/Post';


import {PostService} from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts: Post[];
  selectedPost: Post;

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(posts => this.posts = posts);
  }

  onSelect(post: Post): void {
    this.selectedPost = post;
  }

}
