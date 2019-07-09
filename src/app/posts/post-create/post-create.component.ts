import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PostsService } from '../posts.service';

@Component({
  selector:    'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls:   ['./post-create.component.css']
})
export class PostCreateComponent {

  onAddPost(postForm: NgForm) {
    if (postForm.invalid) {
      return;
    }
    this.postsService.addPost(postForm.value.title, postForm.value.content);
    postForm.resetForm();
  }

  constructor(public postsService: PostsService) {}
}
