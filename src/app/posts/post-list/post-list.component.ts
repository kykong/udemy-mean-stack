import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';

@Component({
  selector:    'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls:   ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  // posts = [
  //   {title: 'First post', content: 'This is the first post'},
  //   {title: 'Second post', content: 'This is the second post'},
  //   {title: 'Third post', content: 'This is the third post'}
  // ];

  posts: Post[] = [];

  constructor(public postsService: PostsService) {}

  ngOnInit(): void {
    this.posts = this.postsService.getPosts();
    this.postsService.getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
  }
}
