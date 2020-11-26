import {Component, OnInit, Input} from '@angular/core';

import {Post} from '../data/Post';
import {PostService} from '../post.service';
import {MessageService} from '../message.service';


@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  @Input() post: Post;

  constructor(private postService: PostService, private messageService: MessageService) {
  }


  ngOnInit(): void {
  }

  save(): void {
    this.postService.updatePost(this.post)
      .subscribe(() => {}); //this.goBack()
  }
}
