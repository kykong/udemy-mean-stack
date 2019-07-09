import { Post } from './post.model';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  getPosts() {
    return [...this.posts];  // return a new array and copying the elements of posts
  }

  getPostUpdateListener(): Observable<Post[]> {
    return this.postsUpdated.asObservable();
  }

  addPost(newTitle: string, newContent: string) {
    const post: Post = {
      title: newTitle,
      content: newContent
    };

    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
  }
}
