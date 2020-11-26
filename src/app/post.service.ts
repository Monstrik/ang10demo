import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

import {POSTS} from './data/mock-data';
import {Post} from './data/Post';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private messageService: MessageService) { }


  getPosts(): Observable<Post[]> {
    this.messageService.add('PostService: fetched posts');
    return of(POSTS);
  }
}
