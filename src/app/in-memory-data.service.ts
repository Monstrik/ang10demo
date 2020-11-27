import {Injectable} from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Post} from './data/Post';
import {POSTS} from './data/mock-data';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(): any {
    const posts = POSTS;
    return {posts};
  }

  genId(posts: Post[]): string {
    return posts.length > 0 ? (Math.max(...posts.map(post => (+post.id))) + 1) + '' : '0';
  }
}
