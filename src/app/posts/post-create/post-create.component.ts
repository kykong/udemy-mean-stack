import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Post } from '../post.model';
import { format } from 'path';

@Component({
  selector:    'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls:   ['./post-create.component.css']
})
export class PostCreateComponent {
  enteredContent = '';
  enteredTitle = '';
  @Output() postCreated = new EventEmitter<Post>();

  onAddPost(postForm:NgForm) {
    if (postForm.invalid) {
      return;
    }

    const post: Post = {
      title: postForm.value.title,
      content: postForm.value.content
    };

    this.postCreated.emit(post);
  }
}
