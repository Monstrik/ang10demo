import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

import {POSTS} from './data/mock-data';
import {Post} from './data/Post';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() {
  }

  getPosts(): Observable<Post[]> {
    return of(POSTS);
  }
}
