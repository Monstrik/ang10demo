import {Component, EventEmitter, OnInit, Input, Output} from '@angular/core';
import {NgForm} from '@angular/forms';

import {Post} from '../data/Post';
import {PostService} from '../post.service';
import {MessageService} from '../message.service';


@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  editMode = false;
  @Input() post: Post;
  @Output() reload = new EventEmitter<boolean>();

  constructor(private postService: PostService, private messageService: MessageService) {
  }


  ngOnInit(): void {
  }

  delete(): void {
    this.postService.deletePost(this.post).subscribe();
  }

  save(): void {
    this.postService.updatePost(this.post)
      .subscribe(() => {
      }); //this.goBack()
    this.editMode = false;
    this.reload.emit(true);
  }

  edit(): void {
    this.editMode = true;
  }

  cancel(): void {
    this.editMode = false;
  }

  saveForm(postForm: NgForm): void {

    if (!postForm.form.dirty) {
      return this.cancel();
    }

    const newTags: Array<string> = postForm.value.tags.split(',').map(v => v.trim());
    const post: Post = {
      ...postForm.value,
      id: this.post.id,
      tags: newTags
    };

    this.postService.updatePost(post)
      .subscribe((res) => {
        console.log('res', res);
        this.editMode = false;
        this.reload.emit(true);
      });
  }
}
