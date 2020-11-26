import {Injectable} from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Post} from './data/Post';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(): any {
    const posts = [
      {
        id: '1',
        title: 'This is an item',
        text: 'This is a description of the item, it might describe a bug/task/comment, it can also display <a href=”www.google.com” >Links</a>',
        tags: ['bug', 'issue', 'etc'],
      },
      {
        id: '2',
        title: 'This is an item 2',
        text: 'This is a description of the item 2, it might describe a bug/task/comment, it can also display <a href=”www.google.com” >Links</a>',
        tags: ['bug', 'issue', 'etc'],
      },
    ];
    return {posts};
  }

  genId(posts: Post[]): string {
    return posts.length > 0 ? (Math.max(...posts.map(post => (+post.id))) + 1) + '' : '0';
  }
}
