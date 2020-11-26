import {Component, OnInit} from '@angular/core';
import {Post} from '../data/Post';
import {PostService} from '../post.service';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts: Post[];
  selectedPost: Post;

  constructor(private postService: PostService, private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(posts => this.posts = posts);
  }

  onSelect(post: Post): void {
    this.messageService.add(`PostListComponent: Selected post id=${post.id}`);
    this.selectedPost = post;
  }

  add(title: string): void {
    title = title.trim();
    if (!name) { return; }
    this.postService.addPost({ title } as Post)
      .subscribe(post => {
        this.posts.push(post);
      });
  }



  delete(post: Post): void {
    this.posts = this.posts.filter(p => p !== post);
    this.postService.deletePost(post).subscribe();
  }
}
