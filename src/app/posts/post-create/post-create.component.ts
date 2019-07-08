import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector:    'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls:   ['./post-create.component.css']
})
export class PostCreateComponent {
  enteredContent = '';
  enteredTitle = '';
  @Output() postCreated = new EventEmitter();

  onAddPost() {
    this.postCreated.emit({
      title: this.enteredTitle,
      content: this.enteredContent
    });
  }
}
